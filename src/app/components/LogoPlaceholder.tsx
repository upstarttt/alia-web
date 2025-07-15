interface LogoPlaceholderProps {
  width: number;
  height: number;
  companyName: string;
}

export default function LogoPlaceholder({ width, height, companyName }: LogoPlaceholderProps) {
  return (
    <div 
      className="flex items-center justify-center bg-blue-800/40 rounded-lg border border-blue-600/30 transition-all duration-300 opacity-90"
      style={{ width, height }}
    >
      <span className="text-blue-300 text-xs font-medium text-center px-2">
        {companyName}
      </span>
    </div>
  );
} 