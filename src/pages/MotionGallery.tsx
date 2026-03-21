import { useEffect, useMemo, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import { motionStudies } from "../data/motionStudies";
import type { MotionStudy } from "../data/motionStudies";
function publicUrl(pathFromPublic: string) {
  const clean = pathFromPublic.startsWith("/") ? pathFromPublic.slice(1) : pathFromPublic;
  return `${import.meta.env.BASE_URL}${clean}`;
}

export default function MotionGallery() {
  const [activeMotion, setActiveMotion] = useState<MotionStudy | null>(null);
  const modalVideoRef = useRef<HTMLVideoElement | null>(null);

  const studies = useMemo(() => motionStudies, []);

  // lock scroll + ESC
  useEffect(() => {
    if (!activeMotion) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (ev: KeyboardEvent) => {
      if (ev.key === "Escape") setActiveMotion(null);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeMotion]);

  // stop video on close
  useEffect(() => {
    if (activeMotion) return;

    const v = modalVideoRef.current;
    if (!v) return;
    try {
      v.pause();
      v.currentTime = 0;
    } catch {}
  }, [activeMotion]);

  return (
    <div className="min-h-screen bg-[#f4f5f6] px-5 py-10 dark:bg-[#0b1220]">
      <Navbar />

      <div className="pt-20">
        <div className="mx-auto max-w-6xl rounded-[28px] border border-black/5 bg-gradient-to-br from-white via-sky-50 to-indigo-50 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.08)]
                        dark:border-white/10 dark:from-[#0f172a] dark:via-[#0b1b33] dark:to-[#111827] dark:shadow-[0_25px_80px_rgba(0,0,0,0.55)]">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h1 className="text-2xl font-extrabold text-black/90 dark:text-white/90">Motion Experiments</h1>
              <p className="mt-2 text-sm text-black/60 dark:text-white/60">
                A collection of motion studies (MP4) focused on product storytelling + micro-interactions.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {studies.map((m) => {
              const src = publicUrl(m.videoSrc);

              return (
                <motion.button
                  key={m.id}
                  type="button"
                  onClick={() => setActiveMotion(m)}
                  whileHover={{ y: -2, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 420, damping: 28 }}
                  className="overflow-hidden rounded-2xl border border-black/10 bg-white text-left shadow-[0_12px_30px_rgba(0,0,0,0.06)] transition hover:shadow-[0_18px_45px_rgba(0,0,0,0.10)]
                             dark:border-white/10 dark:bg-white/5 dark:shadow-none"
                >
                  <div className="relative h-44 w-full bg-black/5 dark:bg-white/5">
                    <video
                      key={src}
                      className="h-full w-full object-cover"
                      muted
                      loop
                      playsInline
                      controls
                      preload="auto"
                      onLoadedData={(e) => {
                        const v = e.currentTarget;
                        v.play().catch(() => {});
                      }}
                    >
                      <source src={src} type="video/mp4" />
                    </video>

                    <div className="pointer-events-none absolute bottom-3 left-3">
                      <span className="rounded-full border border-black/10 bg-white/70 px-3 py-1 text-[11px] font-semibold text-black/40 dark:border-white/10 dark:bg-black/40 dark:text-white/35">
                        Click to open
                      </span>
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="text-xs text-black/45 dark:text-white/45">{m.tag}</div>
                    <div className="mt-1 text-sm font-semibold text-black/85 dark:text-white/85">{m.title}</div>
                    <div className="mt-2 text-xs leading-relaxed text-black/60 line-clamp-2 dark:text-white/60">
                      {m.summary}
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeMotion && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveMotion(null)}
          >
            <motion.div
              className="w-full max-w-3xl overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_30px_90px_rgba(0,0,0,0.25)]
                         dark:border-white/10 dark:bg-[#0f172a]"
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label={`${activeMotion.title} motion study`}
            >
              <div className="relative h-64 w-full bg-black">
                <video
                  ref={modalVideoRef}
                  key={publicUrl(activeMotion.videoSrc)}
                  className="h-full w-full object-contain"
                  muted
                  loop
                  playsInline
                  controls
                  preload="auto"
                  onLoadedData={(e) => {
                    const v = e.currentTarget;
                    v.play().catch(() => {});
                  }}
                >
                  <source src={publicUrl(activeMotion.videoSrc)} type="video/mp4" />
                </video>
              </div>

              <div className="p-6">
                <div className="text-xs text-black/45 dark:text-white/45">{activeMotion.tag}</div>
                <div className="mt-1 text-xl font-bold text-black/90 dark:text-white/90">{activeMotion.title}</div>
                <p className="mt-3 text-sm leading-relaxed text-black/65 dark:text-white/65">{activeMotion.summary}</p>

                <div className="mt-5">
                  <div className="text-sm font-semibold text-black/80 dark:text-white/80">Highlights</div>
                  <ul className="mt-2 space-y-2 text-sm text-black/60 dark:text-white/60">
                    {activeMotion.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-black/40 dark:bg-white/40" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex justify-end">
                  <button
                    className="rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-black/30
                               dark:bg-white dark:text-black dark:focus:ring-white/30"
                    onClick={() => setActiveMotion(null)}
                  >
                    Close
                  </button>
                </div>

                <div className="mt-3 text-[11px] text-black/45 dark:text-white/45">
                  Tip: Press <span className="font-semibold text-black/60 dark:text-white/70">Esc</span> to close
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}