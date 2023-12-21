import PropTypes from "prop-types";
import React from "react";
import { RenderFlagMandatory } from "../../FlagMandatory";
import { RenderInputFieldCustom } from "../../InputFieldCustom";

export const RenderEmailRegister = ({ setEmailField, pathname, setNameField }) => {
    if (pathname === "/register") {
      return (
        <React.Fragment>
          <div
            style={{
              display: "flex",
              alignItems: "start",
              flexDirection: "column",
              marginTop: "16px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "start",
                gap: "4px",
                padding: "0px",
              }}
            >
              <div
                style={{
                  font: "500 14px/20px Helvetica Neue, sans-serif ",
                  letterSpacing: "0.28px",
                  whiteSpace: "nowrap",
                  color: "var(--text-color-primary, #343A4A)",
                }}
              >
                Email
              </div>
              <RenderFlagMandatory/>
            </div>
            <RenderInputFieldCustom
                label={"Email"}
                type={"email"}
                setField={setEmailField}
            />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "start",
              flexDirection: "column",
              marginTop: "16px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "start",
                gap: "4px",
                padding: "0px",
              }}
            >
              <div
                style={{
                  font: "500 14px/20px Helvetica Neue, sans-serif ",
                  color: "var(--text-color-primary, #343A4A)",
                  letterSpacing: "0.28px",
                  whiteSpace: "nowrap",
                }}
              >
                Name
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
    }
    return (
      <div
        style={{
          display: "flex",
          alignItems: "start",
          flexDirection: "column",
          marginTop: "16px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "start",
            gap: "4px",
            padding: "0px",
          }}
        >
          <div
            style={{
              font: "500 14px/20px Helvetica Neue, sans-serif ",
              color: "var(--text-color-primary, #343A4A)",
              letterSpacing: "0.28px",
              whiteSpace: "nowrap",
            }}
          >
            Email
          </div>
          <renderFlagMandatory />
        </div>
        <RenderInputFieldCustom
            label={"Email"}
            type={"email"}
            setField={setEmailField}
        />
      </div>
    );
  };
  RenderEmailRegister.propTypes = {
    setEmailField: PropTypes.func.isRequired,
    pathname: PropTypes.string.isRequired,
    setNameField: PropTypes.string
  };