interface LogoProps {
  size?: number;
}

export default function Logo({ size = 34 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      role="img"
      aria-label="BIF hexagonal B logo"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32 4L56.249 18V46L32 60L7.751 46V18L32 4Z"
        stroke="#10B981"
        strokeWidth="2"
      />
      <path d="M32 4V60M7.751 18L56.249 46M56.249 18L7.751 46" stroke="#1A1A1A" strokeWidth="1" />
      <path
        d="M23 17H35.5C41.2 17 44.5 20.08 44.5 24.72C44.5 28.16 42.62 30.44 39.86 31.28C43.22 32.08 46 34.72 46 38.96C46 44 42.3 47 36.24 47H23V17ZM34.72 29.08C37.42 29.08 39 27.76 39 25.48C39 23.28 37.42 22 34.72 22H28.6V29.08H34.72ZM35.52 42C38.66 42 40.32 40.56 40.32 38.04C40.32 35.6 38.62 34.08 35.52 34.08H28.6V42H35.52Z"
        fill="#F4F4F5"
      />
      <path d="M18 12H22M42 12H46M18 52H22M42 52H46" stroke="#10B981" strokeWidth="2" />
    </svg>
  );
}
