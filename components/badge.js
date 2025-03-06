export default function Badge({ icon, title, subtitle }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative mb-2">
        <div className="absolute -left-8 -top-8">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 0C20 11.0457 11.0457 20 0 20C11.0457 20 20 28.9543 20 40C20 28.9543 28.9543 20 40 20C28.9543 20 20 11.0457 20 0Z"
              fill="#F2F2F2"
            />
          </svg>
        </div>
        <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gray-100">{icon}</div>
      </div>
      <div className="font-bold text-center">{title}</div>
      <div className="text-sm text-center">{subtitle}</div>
    </div>
  )
}

