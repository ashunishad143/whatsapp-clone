type Props = {
  className?: string;
};

export const ArrowRightIcon = ({ className = "" }: Props) => (
  <span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className={`w-5 h-5 ${className}`}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.778 2.23a.783.783 0 0 1 1.107 0l5.217 5.217a.783.783 0 0 1 0 1.106l-5.217 5.218a.783.783 0 0 1-1.107-1.107L10.442 8 5.778 3.336a.783.783 0 0 1 0-1.107"
        fill="currentColor"
      ></path>
    </svg>
  </span>
);

export const ArrowOut = ({ className = "" }: Props) => (
  <span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className={`w-6 h-6 ${className}`}
    >
      <title>wa-brand-arrow-out</title>
      <g clipPath="url(#a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.764 3.447a.75.75 0 0 0-.006 1.5l5.713.023-6.276 6.275a.75.75 0 1 0 1.06 1.06l6.277-6.275.022 5.713a.75.75 0 0 0 1.5-.006l-.03-7.487a.75.75 0 0 0-.78-.774z"
          fill="currentColor"
        ></path>
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M.5 0h16v16H.5z"></path>
        </clipPath>
      </defs>
    </svg>
  </span>
);
