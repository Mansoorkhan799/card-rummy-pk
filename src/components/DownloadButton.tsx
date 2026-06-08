const DOWNLOAD_LINK = "https://pkcardrummy.com/?from_gameid=6191689&channelCode=6113272";

interface DownloadButtonProps {
  label?: string;
  className?: string;
  fullWidth?: boolean;
}

export default function DownloadButton({
  label = "DOWNLOAD CARD RUMMY",
  className = "",
  fullWidth = false,
}: DownloadButtonProps) {
  return (
    <a
      href={DOWNLOAD_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download Card Rummy APK for Android"
      className={`download-btn bg-transparent hover:bg-[#0ea5e9]/10 text-white font-bold py-3 px-6 rounded-full inline-flex items-center justify-center transition-all shadow-lg hover:shadow-xl border-2 border-[#0ea5e9] whitespace-nowrap ${fullWidth ? "w-full" : ""} ${className}`}
    >
      <span>{label}</span>
      <div className="download-icon ml-2 bg-[#f97316] rounded-full p-2 flex-shrink-0">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      </div>
    </a>
  );
}
