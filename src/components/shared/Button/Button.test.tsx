import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import Button from "./index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

i18next.init({
  lng: 'en',
  resources: {
    en: {
      translation: {
        "root": {
          "test": "Click me",
        }
      }
    }
  }
});

describe("Button", () => {
  test("renders a button", () => {
    render(
      <I18nextProvider i18n={i18next}>
        <Button label="Click me"></Button>
      </I18nextProvider>
    );
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  test("renders a button with the correct text and icon", () => {
    render(
      <I18nextProvider i18n={i18next}>
        <Button label="Click me">
          <FontAwesomeIcon icon={faEnvelope}/>
        </Button>
      </I18nextProvider>);
    expect(screen.getByText("Click me")).toHaveTextContent("Click me");
  });
  test("should be able to click on the button", () => {
    const onClick = vi.fn();
    render(<I18nextProvider i18n={i18next}>
      <Button onClick={onClick} label="Click me"></Button>
    </I18nextProvider>);
    fireEvent.click(screen.getByText("Click me"));
    expect(onClick).toHaveBeenCalled();
  });
});