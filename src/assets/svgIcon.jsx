import PropTypes from "prop-types";

export const LoginIcon = () => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.5 5.5C2.5 3.84315 3.84315 2.5 5.5 2.5H13.5C15.1569 2.5 16.5 3.84315 16.5 5.5C16.5 6.05228 16.0523 6.5 15.5 6.5C14.9477 6.5 14.5 6.05228 14.5 5.5C14.5 4.94772 14.0523 4.5 13.5 4.5H5.5C4.94772 4.5 4.5 4.94772 4.5 5.5V19.5C4.5 20.0523 4.94772 20.5 5.5 20.5H13.5C14.0523 20.5 14.5 20.0523 14.5 19.5C14.5 18.9477 14.9477 18.5 15.5 18.5C16.0523 18.5 16.5 18.9477 16.5 19.5C16.5 21.1569 15.1569 22.5 13.5 22.5H5.5C3.84315 22.5 2.5 21.1569 2.5 19.5V5.5Z"
        fill="#00524C"
      />
      <path
        d="M14.6679 7.9453C14.9743 7.48577 15.5952 7.3616 16.0547 7.66795L22.0361 11.6556C22.0969 11.6941 22.1541 11.7396 22.2063 11.7918C22.2773 11.8625 22.3361 11.9423 22.3819 12.0281C22.4596 12.1737 22.5001 12.3364 22.5001 12.5006C22.5001 12.5976 22.4861 12.695 22.4573 12.7899C22.4382 12.8533 22.4128 12.9141 22.3821 12.9716C22.3366 13.0567 22.2785 13.1359 22.2082 13.2063C22.1555 13.2593 22.0977 13.3054 22.0361 13.3444L16.0547 17.3321C15.5952 17.6384 14.9743 17.5142 14.6679 17.0547C14.3616 16.5952 14.4858 15.9743 14.9453 15.6679L18.1972 13.5H8.5C7.94772 13.5 7.5 13.0523 7.5 12.5C7.5 11.9477 7.94772 11.5 8.5 11.5H18.1972L14.9453 9.33205C14.4858 9.0257 14.3616 8.40483 14.6679 7.9453Z"
        fill="#00524C"
      />
    </svg>
  );
};

export const LogoIcon = () => {
  return (
    <svg
      width="101"
      height="24"
      viewBox="0 0 101 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xlinkHref="http://www.w3.org/1999/xlink"
    >
      <rect width="100.444" height="24" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_6693_2744"
            transform="scale(0.00294985 0.0123457)"
          />
        </pattern>
        <image
          id="image0_6693_2744"
          width="339"
          height="81"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export const HomeIcon = () => {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.33333 32.9998C5.44928 32.9998 4.60143 32.6838 3.97631 32.1212C3.35119 31.5586 3 30.7955 3 29.9998V16.3836C3 14.5609 3.82854 12.837 5.25183 11.6984L14.2518 4.49838C16.4431 2.74533 19.5569 2.74533 21.7482 4.49838L30.7482 11.6984C32.1715 12.837 33 14.5609 33 16.3836V29.9998C33 30.7955 32.6488 31.5586 32.0237 32.1212C31.3986 32.6838 30.5507 32.9998 29.6667 32.9998H6.33333ZM7.12591 14.041L16.1259 6.84099C17.2216 5.96446 18.7784 5.96446 19.8741 6.84099L28.8741 14.041C29.5857 14.6103 30 15.4722 30 16.3836V29.9049C29.9459 29.9449 29.8314 29.9998 29.6667 29.9998H24V20.9998C24 18.7403 22.751 16.7724 20.9057 15.7491C20.0448 15.2717 19.0541 14.9998 18 14.9998C14.6863 14.9998 12 17.6861 12 20.9998V29.9998H6.33333C6.1686 29.9998 6.05405 29.9449 6 29.9049V16.3836C6 15.4722 6.41427 14.6103 7.12591 14.041ZM21 29.9998H15V20.9998C15 19.343 16.3431 17.9998 18 17.9998C19.6569 17.9998 21 19.343 21 20.9998V29.9998Z"
        fill="#00524C"
      />
    </svg>
  );
};

export const HamburgerIcon = () => {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.5 18L31.5 18"
        stroke="#E91254"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M4.5 27L31.5 27"
        stroke="#E91254"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M4.5 9L31.5 9"
        stroke="#E91254"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const TaskListIcon = () => {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.5 12C12.6716 12 12 12.6716 12 13.5C12 14.3284 12.6716 15 13.5 15H22.5C23.3284 15 24 14.3284 24 13.5C24 12.6716 23.3284 12 22.5 12H13.5Z"
        fill="#E91254"
      />
      <path
        d="M12 19.5C12 18.6716 12.6716 18 13.5 18H21C21.8284 18 22.5 18.6716 22.5 19.5C22.5 20.3284 21.8284 21 21 21H13.5C12.6716 21 12 20.3284 12 19.5Z"
        fill="#E91254"
      />
      <path
        d="M13.5 24C12.6716 24 12 24.6716 12 25.5C12 26.3284 12.6716 27 13.5 27H19.5C20.3284 27 21 26.3284 21 25.5C21 24.6716 20.3284 24 19.5 24H13.5Z"
        fill="#E91254"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 4.5C15 3.67157 14.3284 3 13.5 3C12.6716 3 12 3.67157 12 4.5V6C8.68629 6 6 8.68629 6 12V27C6 30.3137 8.68629 33 12 33H24C27.3137 33 30 30.3137 30 27V12C30 8.68629 27.3137 6 24 6V4.5C24 3.67157 23.3284 3 22.5 3C21.6716 3 21 3.67157 21 4.5V6H15V4.5ZM22.5 10.5C21.6716 10.5 21 9.82843 21 9H15C15 9.82843 14.3284 10.5 13.5 10.5C12.6716 10.5 12 9.82843 12 9C10.3431 9 9 10.3431 9 12V27C9 28.6569 10.3431 30 12 30H24C25.6569 30 27 28.6569 27 27V12C27 10.3431 25.6569 9 24 9C24 9.82843 23.3284 10.5 22.5 10.5Z"
        fill="#E91254"
      />
    </svg>
  );
};

export const SearchIcon = ({ color = "#fff" }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="15" cy="15" r="10.5" stroke={color} strokeWidth="3" />
      <path
        d="M22.5 22.5L31.5 31.5"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const ProfileIcon = () => {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.2663 9.11418C21.2663 10.792 19.9061 12.1522 18.2283 12.1522C16.5504 12.1522 15.1902 10.792 15.1902 9.11418C15.1902 7.43631 16.5504 6.07613 18.2283 6.07613C19.9061 6.07613 21.2663 7.43631 21.2663 9.11418ZM24.3044 9.11418C24.3044 12.4699 21.584 15.1903 18.2283 15.1903C14.8725 15.1903 12.1522 12.4699 12.1522 9.11418C12.1522 5.75844 14.8725 3.03809 18.2283 3.03809C21.584 3.03809 24.3044 5.75844 24.3044 9.11418ZM7.59511 25.8234C7.59511 23.3066 9.63538 21.2664 12.1522 21.2664H18.2283H24.3044C26.8212 21.2664 28.8614 23.3066 28.8614 25.8234V31.8995C28.8614 32.7385 29.5415 33.4185 30.3805 33.4185C31.2194 33.4185 31.8995 32.7385 31.8995 31.8995V25.8234C31.8995 21.6288 28.499 18.2283 24.3044 18.2283H18.2283H12.1522C7.95752 18.2283 4.55707 21.6288 4.55707 25.8234V31.8995C4.55707 32.7385 5.23716 33.4185 6.07609 33.4185C6.91502 33.4185 7.59511 32.7385 7.59511 31.8995V25.8234Z"
        fill="#E80B52"
      />
    </svg>
  );
};

export const IconTable = () => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.46 9.73L21.03 4.73C20.9718 4.52009 20.8464 4.33503 20.673 4.20318C20.4996 4.07133 20.2878 3.99996 20.07 4H4.92997C4.47997 4 4.08997 4.3 3.96997 4.73L2.53997 9.73C2.35997 10.36 2.83997 11 3.49997 11H5.69997L4.64997 18.88C4.62878 19.0106 4.634 19.1441 4.66533 19.2726C4.69666 19.4011 4.75345 19.5221 4.83235 19.6283C4.91125 19.7344 5.01065 19.8237 5.12467 19.8908C5.23869 19.9579 5.365 20.0014 5.49614 20.0188C5.62729 20.0362 5.76058 20.0271 5.88815 19.9921C6.01571 19.957 6.13495 19.8968 6.2388 19.8148C6.34266 19.7329 6.42902 19.6309 6.49277 19.515C6.55653 19.3991 6.59638 19.2716 6.60997 19.14L7.16997 15H17.84L18.39 19.14C18.4234 19.3769 18.5407 19.5939 18.7205 19.7517C18.9003 19.9095 19.1308 19.9976 19.37 20C19.97 20 20.43 19.47 20.35 18.88L19.3 11H21.5C22.16 11 22.64 10.36 22.46 9.73ZM7.42997 13L7.69997 11H17.3L17.57 13H7.42997Z"
        fill="white"
      />
    </svg>
  );
};

export const IconClose = ({color="white", width="20", height="20"}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.99996 18.3332C14.6023 18.3332 18.3333 14.6022 18.3333 9.99984C18.3333 5.39746 14.6023 1.6665 9.99996 1.6665C5.39759 1.6665 1.66663 5.39746 1.66663 9.99984C1.66663 14.6022 5.39759 18.3332 9.99996 18.3332ZM7.25592 6.07741C6.93049 5.75197 6.40285 5.75197 6.07741 6.07741C5.75197 6.40285 5.75197 6.93049 6.07741 7.25592L8.82149 10L6.07741 12.7441C5.75197 13.0695 5.75197 13.5972 6.07741 13.9226C6.40285 14.248 6.93049 14.248 7.25592 13.9226L10 11.1785L12.7441 13.9226C13.0695 14.248 13.5972 14.248 13.9226 13.9226C14.248 13.5972 14.248 13.0695 13.9226 12.7441L11.1785 10L13.9226 7.25592C14.248 6.93049 14.248 6.40285 13.9226 6.07741C13.5972 5.75197 13.0695 5.75197 12.7441 6.07741L10 8.82149L7.25592 6.07741Z"
        fill={color}
      />
    </svg>
  );
};
IconClose.propTypes = {
  color: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

export const IconCloseTransparent = () => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.70711 7.79289C8.31658 7.40237 7.68342 7.40237 7.29289 7.79289C6.90237 8.18342 6.90237 8.81658 7.29289 9.20711L10.5858 12.5L7.29289 15.7929C6.90237 16.1834 6.90237 16.8166 7.29289 17.2071C7.68342 17.5976 8.31658 17.5976 8.70711 17.2071L12 13.9142L15.2929 17.2071C15.6834 17.5976 16.3166 17.5976 16.7071 17.2071C17.0976 16.8166 17.0976 16.1834 16.7071 15.7929L13.4142 12.5L16.7071 9.20711C17.0976 8.81658 17.0976 8.18342 16.7071 7.79289C16.3166 7.40237 15.6834 7.40237 15.2929 7.79289L12 11.0858L8.70711 7.79289Z"
        fill="#181818"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 12.5C22 18.0228 17.5228 22.5 12 22.5C6.47715 22.5 2 18.0228 2 12.5C2 6.97715 6.47715 2.5 12 2.5C17.5228 2.5 22 6.97715 22 12.5ZM20 12.5C20 16.9183 16.4183 20.5 12 20.5C7.58172 20.5 4 16.9183 4 12.5C4 8.08172 7.58172 4.5 12 4.5C16.4183 4.5 20 8.08172 20 12.5Z"
        fill="#181818"
      />
    </svg>
  );
};

export const IconArrowLeft = () => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28 34L18 24L28 14"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const IconArrowRight = () => {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 10.5L22.5 18L15 25.5"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const IconArrowBottom = ({color}) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 9L12 15L18 9"
        stroke={color || "#343A4A"}
        strokeWidth="2"
        strokeLinecap="rounds"
        strokeLinejoin="round"
      />
    </svg>
  );
};
IconArrowBottom.propTypes = {
  color: PropTypes.string
}

export const IconArrowUp = ({color}) => {
  return (
    <svg 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="edgeicons">
      <path 
        id="Vector" 
        d="M7 14.25L12 8.625L17 14.25" 
        stroke={color || "white"} 
        strokeWidth="2.25" 
        strokeLinecap="round" 
        strokeLinejoin="round"/>
      </g>
    </svg>

  )
} 
IconArrowUp.propTypes = {
  color: PropTypes.string
}

SearchIcon.propTypes = {
  color: PropTypes.string,
};

export const IconFaceBook = () => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.5 14H17L18 10H14.5V8C14.5 6.97 14.5 6 16.5 6H18V2.64C17.674 2.597 16.443 2.5 15.143 2.5C12.428 2.5 10.5 4.157 10.5 7.2V10H7.5V14H10.5V22.5H14.5V14Z"
        fill="white"
      />
    </svg>
  );
};

export const IconCheck = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.6485 9.95098C18.1172 9.50467 18.1172 8.78105 17.6485 8.33474C17.1799 7.88842 16.4201 7.88842 15.9515 8.33474L10.8 13.2409L8.04853 10.6204C7.5799 10.1741 6.8201 10.1741 6.35147 10.6204C5.88284 11.0668 5.88284 11.7904 6.35147 12.2367L9.95147 15.6653C10.4201 16.1116 11.1799 16.1116 11.6485 15.6653L17.6485 9.95098Z"
        fill="white"
      />
      <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="2" />
    </svg>
  );
};

export const IconWarning = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 6C12.5523 6 13 6.44772 13 7V13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13V7C11 6.44772 11.4477 6 12 6Z"
        fill="white"
      />
      <path
        d="M13 17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17C11 16.4477 11.4477 16 12 16C12.5523 16 13 16.4477 13 17Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z"
        fill="white"
      />
    </svg>
  );
};export const IconChef = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.25002 3.75C4.38805 3.74943 3.5522 4.04583 2.88316 4.58931C2.21412 5.13278 1.75273 5.89015 1.57664 6.73394C1.40056 7.57773 1.52054 8.45642 1.91638 9.22212C2.31222 9.98782 2.95977 10.5938 3.75002 10.938V12.9375H14.25V10.938C15.0835 10.5743 15.7564 9.92014 16.1436 9.09731C16.5308 8.27448 16.6059 7.33901 16.3549 6.46496C16.1038 5.59092 15.5438 4.83784 14.779 4.34586C14.0142 3.85388 13.0967 3.65652 12.1973 3.7905C11.9705 3.12248 11.5401 2.54228 10.9667 2.13138C10.3932 1.72048 9.70548 1.49951 9.00002 1.49951C8.29455 1.49951 7.6068 1.72048 7.03335 2.13138C6.45991 2.54228 6.02957 3.12248 5.80277 3.7905C5.61975 3.76349 5.43501 3.74995 5.25002 3.75ZM14.2485 14.0625H3.75152C3.75902 15.1102 3.81227 15.684 4.18952 16.0605C4.62902 16.5 5.33552 16.5 6.75002 16.5H11.25C12.6645 16.5 13.371 16.5 13.8105 16.0605C14.1878 15.684 14.241 15.1102 14.2485 14.0625Z"
        fill="#F9F9F9"
      />
    </svg>
  );
};

export const IconStar = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.4883 8.04245L13.3172 10.8099L14.2671 14.9303C14.3174 15.1457 14.303 15.3711 14.2259 15.5784C14.1487 15.7857 14.0121 15.9656 13.8333 16.0957C13.6544 16.2258 13.4411 16.3003 13.2202 16.3099C12.9992 16.3194 12.7803 16.2636 12.5909 16.1495L8.99718 13.9698L5.41124 16.1495C5.2218 16.2636 5.0029 16.3194 4.78193 16.3099C4.56095 16.3003 4.34769 16.2258 4.16882 16.0957C3.98994 15.9656 3.85339 15.7857 3.77623 15.5784C3.69907 15.3711 3.68472 15.1457 3.73499 14.9303L4.68351 10.8142L1.51171 8.04245C1.34395 7.89776 1.22264 7.70676 1.163 7.49341C1.10336 7.28006 1.10803 7.05384 1.17644 6.84313C1.24485 6.63243 1.37395 6.44661 1.54754 6.30897C1.72113 6.17134 1.9315 6.08803 2.15226 6.06948L6.33304 5.70737L7.96499 1.81487C8.05021 1.61062 8.19396 1.43616 8.37814 1.31344C8.56231 1.19072 8.77868 1.12524 8.99999 1.12524C9.2213 1.12524 9.43767 1.19072 9.62185 1.31344C9.80602 1.43616 9.94977 1.61062 10.035 1.81487L11.6719 5.70737L15.8512 6.06948C16.072 6.08803 16.2824 6.17134 16.456 6.30897C16.6296 6.44661 16.7586 6.63243 16.8271 6.84313C16.8955 7.05384 16.9001 7.28006 16.8405 7.49341C16.7809 7.70676 16.6595 7.89776 16.4918 8.04245H16.4883Z"
        fill="white"
      />
    </svg>
  );
};

export const IconPlus = ({color="white", width="20", height="20"}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.5 15C9.5 15.5523 9.94772 16 10.5 16C11.0523 16 11.5 15.5523 11.5 15V11H15.5C16.0523 11 16.5 10.5523 16.5 10C16.5 9.44772 16.0523 9 15.5 9H11.5V5C11.5 4.44771 11.0523 4 10.5 4C9.94772 4 9.5 4.44771 9.5 5V9H5.5C4.94772 9 4.5 9.44772 4.5 10C4.5 10.5523 4.94772 11 5.5 11H9.5V15Z"
        fill={color}
      />
    </svg>
  );
};
IconPlus.propTypes = {
  color: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

export const IconMinus = ({color="white", width="20", height="20"}) => {
  return (
    <svg 
      width={width}
      height={height}
      viewBox="0 0 20 20" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg">
      <g id="edgeicons">
      <path 
        id="Vector 29" 
        d="M5 10L15 10" 
        stroke={color}
        strokeWidth={2} />
      </g>
    </svg>
  );
};
IconMinus.propTypes = {
  color: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

export const IconCart = () => {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.00214 4.07112C3.00214 3.78704 3.11499 3.5146 3.31587 3.31372C3.51675 3.11285 3.7892 3 4.07329 3H5.01161C6.56906 3 7.46453 4.01328 7.98297 5.02442C8.33645 5.71637 8.59138 6.56041 8.80346 7.29306H30.8583C31.1894 7.29316 31.5159 7.36996 31.8122 7.51745C32.1086 7.66493 32.3667 7.87908 32.5664 8.14309C32.766 8.4071 32.9018 8.71379 32.963 9.03909C33.0243 9.3644 33.0093 9.69946 32.9192 10.018L29.7144 21.3183C29.4594 22.2149 28.9191 23.0038 28.1753 23.5656C27.4314 24.1273 26.5247 24.4311 25.5926 24.431H14.7119C13.772 24.4313 12.8581 24.1226 12.111 23.5524C11.3638 22.9822 10.8249 22.1821 10.5773 21.2755L9.20193 16.2305C9.19404 16.2079 9.1869 16.185 9.18051 16.162L6.97181 8.67052L6.75758 7.94859C6.54335 7.20737 6.35483 6.55184 6.07204 6.00128C5.73142 5.33719 5.41865 5.14439 5.00947 5.14439H4.07115C3.78706 5.14439 3.51461 5.03154 3.31373 4.83066C3.11285 4.62979 3 4.35734 3 4.07326L3.00214 4.07112ZM14.7912 33C15.6434 33 16.4608 32.6614 17.0634 32.0588C17.666 31.4562 18.0046 30.6389 18.0046 29.7866C18.0046 28.9344 17.666 28.1171 17.0634 27.5144C16.4608 26.9118 15.6434 26.5733 14.7912 26.5733C13.9389 26.5733 13.1216 26.9118 12.5189 27.5144C11.9163 28.1171 11.5777 28.9344 11.5777 29.7866C11.5777 30.6389 11.9163 31.4562 12.5189 32.0588C13.1216 32.6614 13.9389 33 14.7912 33ZM25.5026 33C26.3549 33 27.1722 32.6614 27.7749 32.0588C28.3775 31.4562 28.7161 30.6389 28.7161 29.7866C28.7161 28.9344 28.3775 28.1171 27.7749 27.5144C27.1722 26.9118 26.3549 26.5733 25.5026 26.5733C24.6504 26.5733 23.833 26.9118 23.2304 27.5144C22.6277 28.1171 22.2892 28.9344 22.2892 29.7866C22.2892 30.6389 22.6277 31.4562 23.2304 32.0588C23.833 32.6614 24.6504 33 25.5026 33Z"
        fill="white"
      />
    </svg>
  );
};

export const IconPercentage = () => {
  return (
    <svg 
      width="18" 
      height="18" 
      viewBox="0 0 18 18" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="edgeicons">
      <path 
        id="Subtract" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M10.8641 2.18656C9.78996 1.27115 8.21004 1.27115 7.13585 2.18656C6.67554 2.57884 6.1032 2.81591 5.50033 2.86402C4.09346 2.97629 2.97629 4.09346 2.86402 5.50033C2.81591 6.1032 2.57884 6.67554 2.18656 7.13585C1.27115 8.21004 1.27115 9.78996 2.18656 10.8641C2.57884 11.3245 2.81591 11.8968 2.86402 12.4997C2.97629 13.9065 4.09346 15.0237 5.50033 15.136C6.1032 15.1841 6.67554 15.4212 7.13585 15.8134C8.21004 16.7289 9.78996 16.7289 10.8641 15.8134C11.3245 15.4212 11.8968 15.1841 12.4997 15.136C13.9065 15.0237 15.0237 13.9065 15.136 12.4997C15.1841 11.8968 15.4212 11.3245 15.8134 10.8641C16.7289 9.78996 16.7289 8.21004 15.8134 7.13585C15.4212 6.67554 15.1841 6.1032 15.136 5.50033C15.0237 4.09346 13.9065 2.97629 12.4997 2.86402C11.8968 2.81591 11.3245 2.57884 10.8641 2.18656ZM9.75 12C9.75 11.1716 10.4216 10.5 11.25 10.5C12.0784 10.5 12.75 11.1716 12.75 12C12.75 12.8284 12.0784 13.5 11.25 13.5C10.4216 13.5 9.75 12.8284 9.75 12ZM6.75 4.5C5.92157 4.5 5.25 5.17157 5.25 6C5.25 6.82843 5.92157 7.5 6.75 7.5C7.57843 7.5 8.25 6.82843 8.25 6C8.25 5.17157 7.57843 4.5 6.75 4.5ZM11.7708 5.70078C11.9779 5.34206 11.855 4.88337 11.4963 4.67626C11.1376 4.46916 10.6789 4.59206 10.4718 4.95078L6.22916 12.2992C6.02206 12.658 6.14497 13.1167 6.50369 13.3238C6.86241 13.5309 7.3211 13.408 7.5282 13.0492L11.7708 5.70078Z" 
        fill="white"
      />
      </g>
    </svg>

  )
}

export const IconCheckFill = () => {
  return (
    <svg 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="edgeicons" clipPath="url(#clip0_7085_17187)">
      <path 
        id="Subtract" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M12 0.75C5.7868 0.75 0.75 5.7868 0.75 12C0.75 18.2132 5.7868 23.25 12 23.25C18.2132 23.25 23.25 18.2132 23.25 12C23.25 5.7868 18.2132 0.75 12 0.75ZM18.3546 7.87658C18.8818 8.37868 18.8818 9.19275 18.3546 9.69485L11.6046 16.1234C11.0774 16.6255 10.2226 16.6255 9.69541 16.1234L5.64541 12.2663C5.1182 11.7642 5.1182 10.9501 5.64541 10.448C6.17261 9.9459 7.02739 9.9459 7.55459 10.448L10.65 13.396L16.4454 7.87658C16.9726 7.37447 17.8274 7.37447 18.3546 7.87658Z" 
        fill="white"/>
      </g>
      <defs>
      <clipPath id="clip0_7085_17187">
      <rect width="24" height="24" fill="white"/>
      </clipPath>
      </defs>
    </svg>
  )
}

export const IconCheckSquareFill = () => {
  return (
    <svg 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg">
      <g id="edgeicons">
      <path 
        id="Subtract" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2H6ZM17.6485 8.33473C18.1172 8.78105 18.1172 9.50467 17.6485 9.95098L11.6485 15.6653C11.1799 16.1116 10.4201 16.1116 9.95147 15.6653L6.35147 12.2367C5.88284 11.7904 5.88284 11.0668 6.35147 10.6205C6.8201 10.1741 7.5799 10.1741 8.04853 10.6205L10.8 13.2409L15.9515 8.33473C16.4201 7.88842 17.1799 7.88842 17.6485 8.33473Z" 
        fill="#343A4A"/>
      </g>
    </svg>
  )
}

export const IconRectangle = () => {
  return (
    <svg 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg">
      <g id="edgeicons">
      <rect 
        id="Rectangle 14582" 
        x="3" y="3" 
        width="18" 
        height="18" 
        rx="3" 
        stroke="#343A4A" 
        strokeWidth="2"/>
      </g>
    </svg>
  )
}

export const IconTakeAway = () => {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="material-symbols:restaurant-rounded">
      <path 
        id="Vector" 
        d="M14 18V6C14 5.43333 14.192 4.95867 14.576 4.576C14.96 4.19333 15.4347 4.00133 16 4C16.5667 4 17.042 4.192 17.426 4.576C17.81 4.96 18.0013 5.43467 18 6V18H20V6C20 5.43333 20.192 4.95867 20.576 4.576C20.96 4.19333 21.4347 4.00133 22 4C22.5667 4 23.042 4.192 23.426 4.576C23.81 4.96 24.0013 5.43467 24 6V18C24 19.8667 23.4253 21.5 22.276 22.9C21.1267 24.3 19.7013 25.2333 18 25.7V42C18 42.5667 17.808 43.042 17.424 43.426C17.04 43.81 16.5653 44.0013 16 44C15.4333 44 14.9587 43.808 14.576 43.424C14.1933 43.04 14.0013 42.5653 14 42V25.7C12.3 25.2333 10.8753 24.3 9.726 22.9C8.57667 21.5 8.00133 19.8667 8 18V6C8 5.43333 8.192 4.95867 8.576 4.576C8.96 4.19333 9.43467 4.00133 10 4C10.5667 4 11.042 4.192 11.426 4.576C11.81 4.96 12.0013 5.43467 12 6V18H14ZM34 28H30C29.4333 28 28.9587 27.808 28.576 27.424C28.1933 27.04 28.0013 26.5653 28 26V14C28 11.6667 28.8587 9.41667 30.576 7.25C32.2933 5.08333 34.068 4 35.9 4C36.5 4 37 4.23333 37.4 4.7C37.8 5.16667 38 5.71667 38 6.35V42C38 42.5667 37.808 43.042 37.424 43.426C37.04 43.81 36.5653 44.0013 36 44C35.4333 44 34.9587 43.808 34.576 43.424C34.1933 43.04 34.0013 42.5653 34 42V28Z" 
        fill="black"
      />
      </g>
    </svg>
  )
}

export const IconDineIn = () => {
  return (
    <svg width="36" height="40" viewBox="0 0 36 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Group">
      <path 
        id="Vector" 
        d="M10 2H26C27.0609 2 28.0783 2.42143 28.8284 3.17157C29.5786 3.92172 30 4.93913 30 6V9.64C30.0001 11.1924 30.3616 12.7235 31.056 14.112L32.944 17.888C33.6384 19.2765 33.9999 20.8076 34 22.36V34C34 35.0609 33.5786 36.0783 32.8284 36.8284C32.0783 37.5786 31.0609 38 30 38H6C4.93913 38 3.92172 37.5786 3.17157 36.8284C2.42143 36.0783 2 35.0609 2 34V22.36C2.00011 20.8076 2.36165 19.2765 3.056 17.888L6 12V6C6 4.93913 6.42143 3.92172 7.17157 3.17157C7.92172 2.42143 8.93913 2 10 2Z" 
        stroke="black" 
        strokeWidth="4" 
        strokeLinecap="round" 
        strokeLinejoin="round"/>
      <path 
        id="Vector_2" 
        d="M6 38C7.06087 38 8.07828 37.5786 8.82843 36.8284C9.57857 36.0783 10 35.0609 10 34V22.36C9.99989 20.8076 9.63835 19.2765 8.944 17.888L6 12M16 10H20M18 26C18 27.0609 18.4214 28.0783 19.1716 28.8284C19.9217 29.5786 20.9391 30 22 30C23.0609 30 24.0783 29.5786 24.8284 28.8284C25.5786 28.0783 26 27.0609 26 26C26 24.9391 25.5786 23.9217 24.8284 23.1716C24.0783 22.4214 23.0609 22 22 22C20.9391 22 19.9217 22.4214 19.1716 23.1716C18.4214 23.9217 18 24.9391 18 26Z" 
        stroke="black" 
        strokeWidth="4" 
        strokeLinecap="round" 
        strokeLinejoin="round"/>
      </g>
    </svg>

  )
}
export const IconExpand = ({ primary }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.99999 14L5.99999 10M1.99999 14V10.8M1.99999 14H5.19999M14 10.8V14M14 14H10.8M14 14L10 10M1.99999 5.2V2M1.99999 2H5.19999M1.99999 2L5.99999 6M14 5.2V2M14 2H10.8M14 2L10 6"
        stroke={primary}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

IconExpand.propTypes = {
  primary: PropTypes.string,
};
export const IconExpandHide = ({ primary }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 10L14 14M10 10V13.2M10 10H13.2M6 13.2V10M6 10H2.8M6 10L2 14M10 2.8V6M10 6H13.2M10 6L14 2M6 2.8V6M6 6H2.8M6 6L2 2"
        stroke={primary}
        strokeWidth="1.59937"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

IconExpandHide.propTypes = {
  primary: PropTypes.string,
};

export const IconEdit = ({ primary }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.17805 13.0661L2.94166 11.1478C3.03992 10.901 3.18694 10.677 3.37361 10.4894L11.5217 2.30172L10.9581 1.74083L11.5217 2.30172C11.6453 2.17755 11.8173 2.11739 11.9891 2.13657L12.2498 2.16569C13.1673 2.26813 13.8669 3.04887 13.8669 3.9846C13.8669 4.12248 13.8124 4.25395 13.7165 4.35027L5.48484 12.6219C5.29818 12.8095 5.07578 12.9568 4.83122 13.0551L2.92219 13.8224C2.46362 14.0067 1.98549 13.5498 2.17805 13.0661Z"
        stroke={primary}
        strokeWidth="1.59937"
      />
    </svg>
  );
};

IconEdit.propTypes = {
  primary: PropTypes.string,
};

export const IconMasterCard = () => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.0002 7.00008H7.00016C5.7115 7.00008 4.66683 8.04475 4.66683 9.33341V10.5001H23.3335V12.8334H4.66683V18.6667C4.66683 19.9554 5.7115 21.0001 7.00017 21.0001H21.0002C22.2888 21.0001 23.3335 19.9554 23.3335 18.6667V9.33341C23.3335 8.04475 22.2888 7.00008 21.0002 7.00008ZM7.00016 4.66675C4.42283 4.66675 2.3335 6.75608 2.3335 9.33341V18.6667C2.3335 21.2441 4.42284 23.3334 7.00017 23.3334H21.0002C23.5775 23.3334 25.6668 21.2441 25.6668 18.6667V9.33341C25.6668 6.75609 23.5775 4.66675 21.0002 4.66675H7.00016ZM17.5001 15.1667C16.8558 15.1667 16.3335 15.6891 16.3335 16.3334C16.3335 16.9777 16.8558 17.5001 17.5001 17.5001H19.8335C20.4778 17.5001 21.0001 16.9777 21.0001 16.3334C21.0001 15.6891 20.4778 15.1667 19.8335 15.1667H17.5001Z"
        fill="black"
      />
    </svg>
  );
};

export const IconArrowSolid = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 20V4L16 12L8 20Z" fill="white" />
    </svg>
  );
};