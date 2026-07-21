'use client'

import {useState} from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'
import {pricelist} from '@/data/pricelist'
import {Button} from './ui/button'
import {AlertCircle} from 'lucide-react'

function getAbsoluteStar(rankName: string, divName: string, starInput: number) {
  let abs = 0
  for (const r of pricelist) {
    if (r.rank === rankName) {
      if (r.type === 'romawi') {
        const divIdx = r.divisions!.indexOf(divName)
        // Reverse division order: III is lowest, so it's at index 0.
        // Example: ['III', 'II', 'I'] -> divIdx 0 means lowest.
        abs += divIdx * r.starsPerDivision!
        abs += starInput
      } else {
        abs += starInput
      }
      break
    } else {
      if (r.type === 'romawi') {
        abs += r.divisions!.length * r.starsPerDivision!
      }
    }
  }
  return abs
}

function getPriceForAbsoluteStar(absStar: number) {
  let cumulative = 0
  for (const r of pricelist) {
    if (r.type === 'romawi') {
      const rankStars = r.divisions!.length * r.starsPerDivision!
      if (absStar >= cumulative && absStar < cumulative + rankStars) {
        return r.price
      }
      cumulative += rankStars
    } else {
      const mythicStar = absStar - cumulative
      if (mythicStar >= r.minStars! && mythicStar <= r.maxStars!) {
        return r.price
      }
    }
  }
  return pricelist[pricelist.length - 1].price
}

export function Pricelist() {
  const [startRank, setStartRank] = useState(pricelist[0].rank)
  const [startDiv, setStartDiv] = useState(pricelist[0].divisions![0])
  const [startStar, setStartStar] = useState(0)

  const [endRank, setEndRank] = useState(pricelist[1].rank)
  const [endDiv, setEndDiv] = useState(pricelist[1].divisions![0])
  const [endStar, setEndStar] = useState(1)

  const startAbsolute = getAbsoluteStar(startRank, startDiv, startStar)
  const endAbsolute = getAbsoluteStar(endRank, endDiv, endStar)

  const isValid = endAbsolute > startAbsolute
  const diffStars = endAbsolute - startAbsolute

  let totalPrice = 0
  if (isValid) {
    for (let i = startAbsolute; i < endAbsolute; i++) {
      totalPrice += getPriceForAbsoluteStar(i)
    }
  }

  const renderSelector = (
    label: string,
    rankName: string,
    divName: string,
    starInput: number,
    setRank: (r: string) => void,
    setDiv: (d: string) => void,
    setStar: (s: number) => void,
    isStart: boolean,
  ) => {
    const selectedRankConfig = pricelist.find((r) => r.rank === rankName)!

    return (
      <div className="bg-(--surface-elevated) p-5 rounded-xl border border-(--border) flex-1 shadow-inner">
        <h4 className="font-heading text-xl text-(--primary) tracking-wide mb-4">{label}</h4>

        <div className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-(--text-secondary) uppercase tracking-wider">
              Rank
            </label>
            <select
              className="w-full bg-(--background) border border-(--border) rounded-lg px-3 py-2.5 text-(--text-primary) focus:border-(--primary) focus:ring-1 focus:ring-(--primary) outline-none transition-all appearance-none cursor-pointer"
              value={rankName}
              onChange={(e) => {
                const newRank = pricelist.find((r) => r.rank === e.target.value)!
                setRank(newRank.rank)
                if (newRank.type === 'romawi') {
                  setDiv(newRank.divisions![0])
                  setStar(isStart ? 0 : 1)
                } else {
                  setDiv('')
                  setStar(
                    isStart
                      ? Math.max(0, newRank.minStars || 0)
                      : Math.max(1, newRank.minStars || 0),
                  )
                }
              }}
            >
              {pricelist.map((p) => (
                <option key={p.rank} value={p.rank}>
                  {p.rank}
                </option>
              ))}
            </select>
          </div>

          {selectedRankConfig.type === 'romawi' ? (
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-(--text-secondary) uppercase tracking-wider">
                  Divisi
                </label>
                <select
                  className="w-full bg-(--background) border border-(--border) rounded-lg px-3 py-2.5 text-(--text-primary) focus:border-(--primary) focus:ring-1 focus:ring-(--primary) outline-none transition-all appearance-none cursor-pointer"
                  value={divName}
                  onChange={(e) => setDiv(e.target.value)}
                >
                  {selectedRankConfig
                    .divisions!.slice()
                    .reverse()
                    .map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-(--text-secondary) uppercase tracking-wider">
                  Bintang
                </label>
                <select
                  className="w-full bg-(--background) border border-(--border) rounded-lg px-3 py-2.5 text-(--text-primary) focus:border-(--primary) focus:ring-1 focus:ring-(--primary) outline-none transition-all appearance-none cursor-pointer"
                  value={starInput}
                  onChange={(e) => setStar(parseInt(e.target.value))}
                >
                  {Array.from({
                    length: selectedRankConfig.starsPerDivision! + (isStart ? 1 : 0),
                  }).map((_, i) => {
                    const val = isStart ? i : i + 1
                    return (
                      <option key={val} value={val}>
                        {val} Bintang
                      </option>
                    )
                  })}
                </select>
              </div>
            </div>
          ) : (
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-(--text-secondary) uppercase tracking-wider">
                Total Bintang
              </label>
              <input
                type="number"
                min={isStart ? 0 : 1}
                max={9999}
                className="w-full bg-(--background) border border-(--border) rounded-lg px-3 py-2.5 text-(--text-primary) focus:border-(--primary) focus:ring-1 focus:ring-(--primary) outline-none transition-all"
                value={starInput}
                onChange={(e) => {
                  let val = parseInt(e.target.value)
                  const minAllowed = isStart ? 0 : 1
                  if (isNaN(val)) val = minAllowed

                  const applicableRank = pricelist.find(
                    (r) =>
                      r.type === 'numeric' &&
                      val >= (r.minStars || 0) &&
                      val <= (r.maxStars || 9999),
                  )
                  if (applicableRank && applicableRank.rank !== rankName) {
                    setRank(applicableRank.rank)
                  }

                  setStar(val)
                }}
              />
            </div>
          )}
        </div>
      </div>
    )
  }

  const constructOrderText = () => {
    const startText =
      pricelist.find((r) => r.rank === startRank)?.type === 'romawi'
        ? `${startRank} ${startDiv} (${startStar} Bintang)`
        : `${startRank} (${startStar} Bintang)`

    const endText =
      pricelist.find((r) => r.rank === endRank)?.type === 'romawi'
        ? `${endRank} ${endDiv} (${endStar} Bintang)`
        : `${endRank} (${endStar} Bintang)`

    return `Halo%20HellZ%20Joki,%20saya%20mau%20order%20joki%20dari%20${startText}%20menuju%20${endText}.%20Estimasi%20Total:%20Rp${totalPrice.toLocaleString('id-ID')}`
  }

  return (
    <section id="pricelist" className="py-24 bg-(--background)">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.5}}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl text-(--text-primary) tracking-wide">
            Price List
          </h2>
          <p className="text-(--text-secondary) mt-4">Daftar harga joki termurah dan terpercaya.</p>
        </motion.div>

        {/* Pricelist Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-24">
          {pricelist.map((item, idx) => (
            <motion.div
              key={item.rank}
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{duration: 0.4, delay: idx * 0.05}}
              className="group relative bg-(--surface) rounded-2xl p-5 flex flex-col items-start transition-all duration-500 hover:shadow-2xl hover:shadow-(--primary)/10 border border-(--border)/60 hover:border-(--primary)/30 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-(--primary)/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex items-center gap-4 mb-6 w-full relative z-10">
                <div className="w-14 h-14 relative shrink-0 bg-(--background) rounded-xl border border-(--border)/50 group-hover:border-(--primary)/30 transition-colors overflow-hidden flex items-center justify-center">
                  <div className="w-full h-full relative p-2">
                    <Image
                      src={item.icon}
                      alt={item.rank}
                      fill
                      className="object-contain p-1 scale-[1.2] group-hover:scale-[1.3] transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-base md:text-lg text-(--text-primary) tracking-wide line-clamp-1">
                    {item.rank}
                  </h3>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="text-xl md:text-2xl font-bold text-(--primary)">
                      Rp{(item.price / 1000).toFixed(0)}k
                    </span>
                    <span className="text-[10px] text-(--text-muted) uppercase tracking-wider">
                      / Bintang
                    </span>
                  </div>
                </div>
              </div>

              <div className="w-full mt-auto relative z-10">
                <Button
                  className="w-full rounded-xl bg-(--background) text-(--text-primary) hover:bg-(--primary) hover:text-white border border-(--border)/50 hover:border-transparent transition-all duration-300 shadow-sm"
                  variant="ghost"
                  asChild
                >
                  <a href="#kalkulator">Hitung Biaya</a>
                </Button>
              </div>

              {item.rank === 'Mythic' && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-(--primary)/10 text-(--primary) text-[9px] font-bold uppercase tracking-wider py-1 px-2 rounded-full border border-(--primary)/20 backdrop-blur-sm">
                    Populer
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Advanced Estimator */}
        <motion.div
          id="kalkulator"
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          className="max-w-4xl mx-auto bg-(--surface) border border-(--border) rounded-2xl p-6 md:p-10 shadow-card"
        >
          <div className="text-center mb-10">
            <h3 className="font-heading text-3xl text-(--text-primary) tracking-wide mb-2">
              Kalkulator Estimasi Biaya
            </h3>
            <p className="text-(--text-secondary) text-sm">
              Hitung secara akurat biaya joki dari titik awal ke tujuanmu.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 mb-8">
            {renderSelector(
              'Posisi Awal',
              startRank,
              startDiv,
              startStar,
              setStartRank,
              setStartDiv,
              setStartStar,
              true,
            )}
            {renderSelector(
              'Target Tujuan',
              endRank,
              endDiv,
              endStar,
              setEndRank,
              setEndDiv,
              setEndStar,
              false,
            )}
          </div>

          {!isValid && (
            <div className="flex items-center justify-center gap-2 text-(--danger) mb-8 p-4 bg-(--danger)/10 rounded-lg border border-(--danger)/20">
              <AlertCircle size={20} />
              <p className="text-sm font-medium">Rank Tujuan harus lebih tinggi dari Rank Awal.</p>
            </div>
          )}

          <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-(--background) rounded-xl border border-(--border)/50">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <p className="text-sm font-medium text-(--text-secondary) uppercase tracking-wider mb-1">
                Estimasi Total Biaya
              </p>
              <div className="flex items-baseline gap-3 justify-center md:justify-start">
                <p className="text-4xl md:text-5xl font-bold text-(--primary) tracking-tight">
                  Rp {totalPrice.toLocaleString('id-ID')}
                </p>
                {isValid && diffStars > 0 && (
                  <span className="text-sm text-(--text-muted) font-medium bg-(--surface-elevated) px-3 py-1 rounded-full border border-(--border)">
                    Selisih: {diffStars} Bintang
                  </span>
                )}
              </div>
            </div>
            <Button
              size="lg"
              className="w-full md:w-auto h-14 px-8 text-lg"
              disabled={!isValid}
              asChild
            >
              {isValid ? (
                <a
                  href={`https://wa.me/62895326945192?text=${constructOrderText()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lanjut Order
                </a>
              ) : (
                <span>Lanjut Order</span>
              )}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
