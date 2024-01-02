import PropTypes from "prop-types";
import React from "react";
import { RenderFlagMandatory } from "../../../FlagMandatory";
import { RenderInputFieldCustom } from "../../../InputFieldCustom";
import { Trans } from "react-i18next";
import PhoneDropdown from "../PhoneDropdown";

export const RenderMobileRegister = ({ setNameField, setMobileField }) => {
  return (
    <React.Fragment>
        <div
        style={{
            alignItems: "start",
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "column",
            marginTop: "16px",
        }}
        >
        <div
            style={{
            alignItems: "start",
            display: "flex",
            gap: "4px",
            padding: "0px",
            }}
        >
            <div
            style={{
                color: "var(--text-color-primary, #343A4A)",
                letterSpacing: "0.28px",
                whiteSpace: "nowrap",
                font: "500 14px/20px Helvetica Neue, sans-serif ",
            }}
            >
            <Trans i18nKey={"phone_number"}/>
            </div>
            <RenderFlagMandatory/>
        </div>
        <div
            style={{
            display: "flex",
            alignItems: "start",
            borderRadius: "8px",
            border: "1px solid var(--text-color-tertiary, #888787)",
            boxShadow: "0px 0px 0px 3px rgba(159, 135, 255, 0.20)",
            backgroundColor: "var(--brand-color-secondary, #FFF)",
            marginTop: "4px",
            width: "100%",
            flexDirection: "column",
            justifyContent: "center",
            padding: "12px 60px 12px 16px",
            }}
        >
            <div
            style={{
                width: "100%",
                display: "flex",
                gap: "10px",
                position: "relative",
            }}
            >
            <PhoneDropdown/>
            <input
                onChange={(e) => setMobileField(e.target.value)}
                style={{
                width: "100%",
                font: "500 14px/20px Helvetica Neue, sans-serif ",
                outline: "none",
                }}
                type="number"
                placeholder="Enter your phone number"
            />
            </div>
        </div>
        </div>
        <div
        style={{
            alignItems: "start",
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "column",
            marginTop: "16px",
        }}
        >
        <div
            style={{
            alignItems: "start",
            display: "flex",
            gap: "4px",
            padding: "0px",
            }}
        >
            <div
            style={{
                color: "var(--text-color-primary, #343A4A)",
                letterSpacing: "0.28px",
                whiteSpace: "nowrap",
                font: "500 14px/20px Helvetica Neue, sans-serif ",
            }}
            >
            <Trans i18nKey={"name"}/>
            </div>
            <RenderFlagMandatory/>
        </div>
        <RenderInputFieldCustom 
            label={"Name"}
            type={"text"}
            setField={setNameField}
        />
        </div>
    </React.Fragment>
  );
};
RenderMobileRegister.propTypes = {
    setNameField: PropTypes.func,
    setMobileField: PropTypes.func
};