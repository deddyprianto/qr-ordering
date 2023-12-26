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
export const IconClose = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.99996 18.3332C14.6023 18.3332 18.3333 14.6022 18.3333 9.99984C18.3333 5.39746 14.6023 1.6665 9.99996 1.6665C5.39759 1.6665 1.66663 5.39746 1.66663 9.99984C1.66663 14.6022 5.39759 18.3332 9.99996 18.3332ZM7.25592 6.07741C6.93049 5.75197 6.40285 5.75197 6.07741 6.07741C5.75197 6.40285 5.75197 6.93049 6.07741 7.25592L8.82149 10L6.07741 12.7441C5.75197 13.0695 5.75197 13.5972 6.07741 13.9226C6.40285 14.248 6.93049 14.248 7.25592 13.9226L10 11.1785L12.7441 13.9226C13.0695 14.248 13.5972 14.248 13.9226 13.9226C14.248 13.5972 14.248 13.0695 13.9226 12.7441L11.1785 10L13.9226 7.25592C14.248 6.93049 14.248 6.40285 13.9226 6.07741C13.5972 5.75197 13.0695 5.75197 12.7441 6.07741L10 8.82149L7.25592 6.07741Z"
        fill="white"
      />
    </svg>
  );
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
export const IconArrowBottom = () => {
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
        stroke="#343A4A"
        strokeWidth="2"
        strokeLinecap="rounds"
        strokeLinejoin="round"
      />
    </svg>
  );
};

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
