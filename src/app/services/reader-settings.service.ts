import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReaderSettingsService {
  constructor() {
  }

  getLargeFont() {
    return localStorage.getItem('largeFont') === 'true';
  }

  setLargeFont(large: boolean) {
    localStorage.setItem('largeFont', String(large));
  }

  getLineHeight(): number {
    const ret = localStorage.getItem('lineHeight');

    if (!ret) {
      return 1.5;
    }

    return parseFloat(ret);
  }

  setLineHeight(height: number) {
    localStorage.setItem('lineHeight', height.toString());
  }

  getTextAlignment(): string {
    const ret = localStorage.getItem('textAlignment');

    if (!ret) {
      return 'left';
    }
    return ret;
  }

  setTextAlignment(alignment: string) {
    localStorage.setItem('textAlignment', alignment);
  }

  getFontFamily(): string {
    const ret = localStorage.getItem('fontFamily')
    if (!ret) {
      return 'playfairDisplay';
    }
    return ret;
  }

  setFontFamily(family: string) {
    localStorage.setItem('fontFamily', family);
  }

  getTheme(): string {
    const ret = localStorage.getItem('readerTheme');
    if (!ret) {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      } else {
        return 'light';
      }
    }

    return ret;
  }

  setTheme(theme: string) {
    localStorage.setItem('readerTheme', theme);
  }
}
