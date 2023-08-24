import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, test, } from "vitest";
import Title from "./index";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

i18next.init({
  lng: 'en',
  resources: {
    en: {
      translation: {
        "titles": {
          "about": "About Me",
        }
      }
    }
  }
});

describe("Title", () => {
  test("renders a title", () => {
    render(<I18nextProvider i18n={i18next}>
      <Title title="about"></Title>
    </I18nextProvider>);
    expect(screen.getByText("About Me")).toBeInTheDocument();
  });
});