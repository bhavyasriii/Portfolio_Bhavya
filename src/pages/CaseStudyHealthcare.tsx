import Navbar from "../components/Navbar";
import { FiArrowLeft, FiExternalLink } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function CaseStudyHealthcare() {
  const navigate = useNavigate();

  const figmaCaseStudyUrl =
    "https://www.figma.com/proto/38iWrXstNdy8IQxXWPJPVe/Untitled?node-id=1-2&scaling=fit-width&content-scaling=responsive";

  const figmaEmbedUrl =
    "https://www.figma.com/embed?embed_host=share&url=" +
    encodeURIComponent(figmaCaseStudyUrl);

  return (
    <div className="min-h-screen bg-[#f4f5f6] dark:bg-[#0b1220]">
      <Navbar />

      <div className="px-4 md:px-6 pt-24 pb-6">
        <div className="mx-auto max-w-7xl">
          {/* Top bar */}
          <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => navigate("/")}
                className="inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-black/80 transition hover:bg-black/5
                           dark:border-white/10 dark:bg-white/5 dark:text-white/80 dark:hover:bg-white/10"
              >
                <FiArrowLeft />
                Back
              </button>

              <div>
                <h1 className="text-lg md:text-xl font-semibold text-black/85 dark:text-white/85">
                  Patient Appointment Booking — Case Study
                </h1>
                <p className="text-xs md:text-sm text-black/50 dark:text-white/50">
                  Best viewed in Figma for full reading comfort
                </p>
              </div>
            </div>

            <a
              href={figmaCaseStudyUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90
                         dark:bg-white dark:text-black"
            >
              <FiExternalLink />
              Open in Figma
            </a>
          </div>

          {/* Mobile fallback */}
          <div className="block md:hidden">
            <div className="overflow-hidden rounded-[24px] border border-black/10 bg-white shadow-[0_18px_50px_rgba(0,0,0,0.08)]
                            dark:border-white/10 dark:bg-[#0f172a] dark:shadow-[0_18px_50px_rgba(0,0,0,0.35)]"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#eef3f8] dark:bg-[#111827]">
                <img
                  src="/images/cover-healthcare.png"
                  alt="Patient Appointment Booking case study preview"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-5">
                <h2 className="text-base font-semibold text-black/85 dark:text-white/85">
                  Mobile viewing note
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-black/60 dark:text-white/60">
                  The full Figma case-study board is too large to render well inside a mobile embed.
                  Open it directly in Figma for the best reading experience.
                </p>

                <div className="mt-4 flex flex-col gap-3">
                  <a
                    href={figmaCaseStudyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-black px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90
                               dark:bg-white dark:text-black"
                  >
                    <FiExternalLink />
                    Open Full Case Study
                  </a>

                  <button
                    type="button"
                    onClick={() => navigate("/")}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-black/10 bg-white px-4 py-3 text-sm font-semibold text-black/80 transition hover:bg-black/5
                               dark:border-white/10 dark:bg-white/5 dark:text-white/80 dark:hover:bg-white/10"
                  >
                    <FiArrowLeft />
                    Back to Portfolio
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop / tablet embed */}
          <div className="hidden md:block">
            <div
              className="overflow-hidden rounded-[24px] border border-black/10 bg-white shadow-[0_18px_50px_rgba(0,0,0,0.08)]
                         dark:border-white/10 dark:bg-[#0f172a] dark:shadow-[0_18px_50px_rgba(0,0,0,0.35)]"
            >
              <iframe
                title="Patient Appointment Booking Case Study"
                src={figmaEmbedUrl}
                className="block h-[85vh] min-h-[700px] w-full"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}