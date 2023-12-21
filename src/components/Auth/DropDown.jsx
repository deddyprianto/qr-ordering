import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { IconArrowBottom, SearchIcon } from "../../assets/svgIcon";
import SearchInput, { createFilter } from "react-search-input";
import countryCodes from "country-codes-list";

export default function Dropdown() {
  const [phoneCountryCode, setPhoneCountryCode] = useState("+65");
  const [valueSearchCode, setValueSearchCode] = useState("");
  const myCountryCodesObject = countryCodes.customList(
    "countryCode",
    "{countryNameEn}: +{countryCallingCode}",
  );

  const optionCodePhone = Object.keys(myCountryCodesObject).map(
    (key) => myCountryCodesObject[key],
  );

  optionCodePhone.sort((a) => {
    let item = a.substring(a.indexOf(":") + 2);
    if (item === phoneCountryCode) {
      return -1;
    } else {
      return 1;
    }
  });

  const filteredPhoneCode = optionCodePhone.filter(
    createFilter(valueSearchCode),
  );

  return (
    <div className="text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="flex w-full justify-center rounded-md gap-3">
            <div className="text-center">{phoneCountryCode}</div>
            <IconArrowBottom />
          </Menu.Button>
        </div>
        {/* start dropdown */}
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute p-0 m-0 mt-6 w-[75vw] lg:w-[40vw] divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none ">
            <div
              style={{
                width: "95%",
                display: "flex",
                alignItems: "center",
                border: "1px solid #ddd",
                borderRadius: "10px",
                justifyContent: "space-between",
                margin: "5px",
              }}
            >
              <div style={{ width: "100%" }}>
                <SearchInput
                  id="search-country-code-input"
                  placeholder="Search for country code"
                  style={{
                    width: "100%",
                    padding: "10px",
                    marginLeft: "5px",
                    border: "none",
                    outline: "none",
                  }}
                  onChange={(e) => setValueSearchCode(e)}
                />
              </div>
              <div className="mr-[10px]">
                <SearchIcon color="#000" />
              </div>
            </div>

            <div className="px-2 py-2 h-[200px] overflow-y-auto">
              {filteredPhoneCode.map((item, i) => {
                const getPhoneCodeFromStr = item.substring(
                  item.indexOf(":") + 1,
                );
                let countryCodeOption = "";

                const phoneCode = getPhoneCodeFromStr.split(" ")[1];
                if (phoneCode === "+65") {
                  countryCodeOption = "country-code-singapore-option";
                } else if (phoneCode === "+62") {
                  countryCodeOption = "country-code-indonesia-option";
                }
                let colorPhoneSelected;

                if (valueSearchCode) {
                  colorPhoneSelected = "black";
                } else if (i === 0) {
                  colorPhoneSelected = "#FF4782";
                } else {
                  colorPhoneSelected = "black";
                }
                return (
                  <Menu.Item key={item}>
                    <div
                      style={{
                        font: "500 16px Helvetica Neue, sans-serif ",
                        cursor: "pointer",
                        color: "black",
                        padding: "10px",
                        margin: 0,
                        opacity: 0.9,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      <p
                        id={countryCodeOption}
                        style={{
                          padding: "0px 0px 7px 0px",
                          margin: 0,
                          cursor: "pointer",
                          color: colorPhoneSelected,
                        }}
                        onClick={() => {
                          setPhoneCountryCode(
                            getPhoneCodeFromStr.split(" ")[1],
                          );
                        }}
                        onKeyDown={(event) => {
                          if (event.key === "Enter" || event.key === " ") {
                            setPhoneCountryCode(
                              getPhoneCodeFromStr.split(" ")[1],
                            );
                          }
                        }}
                      >
                        {item}
                      </p>
                      <hr style={{ width: "95%" }} />
                    </div>
                  </Menu.Item>
                );
              })}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

