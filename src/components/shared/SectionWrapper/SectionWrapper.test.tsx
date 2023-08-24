import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import i18n from 'i18next';
import { I18nextProvider } from 'react-i18next';
import { describe, expect, test, } from "vitest";
import SectionWrapper from ".";

i18n.init({
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

describe("SectionWrapper", () => {
  test("renders a section wrapper with children", () => {
    render(<I18nextProvider i18n={i18n}>
      <SectionWrapper title="about">
        <div>
          <p>Test</p>
        </div>
      </SectionWrapper>
    </I18nextProvider>);
    expect(screen.getByText("About Me")).toBeInTheDocument();
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});