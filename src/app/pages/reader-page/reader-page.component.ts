import {
  Component,
  Renderer2,
  AfterViewInit,
  ElementRef,
  ViewChild,
  OnDestroy,
  OnInit,
  HostListener, ChangeDetectorRef
} from '@angular/core';
import {KeyboardServiceService} from "../../services/keyboard-service.service";
import {Subscription} from "rxjs";
import {ReaderSettingsService} from "../../services/reader-settings.service";

@Component({
  selector: 'app-reader-page',
  templateUrl: './reader-page.component.html',
  styleUrls: ['./reader-page.component.scss']
})
export class ReaderPageComponent implements AfterViewInit, OnDestroy, OnInit {
  private keyDownSubscription: Subscription;
  private page = 0;
  private pageWidth: number;


  selectedFontSize: boolean;

  lineHeight: number;

  textAlignment: string;

  fontFamily: string;

  @ViewChild('scrollElement') scrollElement: ElementRef;

  constructor(
    private renderer: Renderer2,
    private keyboardService: KeyboardServiceService,
    private settings: ReaderSettingsService,
  ) {
    this.keyDown = this.keyDown.bind(this);
    this.selectedFontSize = settings.getLargeFont();
    this.lineHeight = settings.getLineHeight();
    this.textAlignment = settings.getTextAlignment();
    this.fontFamily = settings.getFontFamily();
  }

  keyDown(event: KeyboardEvent) {
    if (event.key === 'ArrowRight') {
      this.page++;
    }

    if (event.key === 'ArrowLeft') {
      this.page--;
      if (this.page < 0) {
        this.page = 0;
      }
    }

    this.renderer.setStyle(this.scrollElement.nativeElement, 'transform', `translate3d(-${this.pageWidth * this.page}px, 0px, 0px)`);
  }

  // ---------- select font size -----------

  selectFontSize(fontSize: boolean) {
    this.settings.setLargeFont(fontSize);
    this.reloadScrollComponent();
  }

  reloadScrollComponent() {
    // TODO: find better way to reload componetn
    window.location.reload();
  }

  // ---------- select font size -----------

  // ---------- select line height -----------

  incrementLineHeight() {
    this.lineHeight += 0.5;
    if (this.lineHeight > 2) {
      this.lineHeight = 2;
    }
    this.settings.setLineHeight(this.lineHeight);
  }

  decrementLineHeight() {
    this.lineHeight -= 0.5;
    if (this.lineHeight < 1) {
      this.lineHeight = 1;
    }
    this.settings.setLineHeight(this.lineHeight);
  }

  // ---------- select line height -----------

  // ---------- select text alignment -----------

  setTextAlignment(alignment: string) {
    this.textAlignment = alignment;
    this.settings.setTextAlignment(this.textAlignment)
  }

  // ---------- select text alignment -----------

  // ---------- select font family -----------

  setFontFamily() {
    this.settings.setFontFamily(this.fontFamily);
  }

  // ---------- select font family -----------

  @HostListener('window:resize', ['$event'])
  onResize(_event: Event) {
    this.renderer.setStyle(this.scrollElement.nativeElement, 'transform', `translate3d(-${this.pageWidth * this.page}px, 0px, 0px)`);
    this.pageWidth = this.renderer.selectRootElement(this.scrollElement.nativeElement, true).offsetWidth + 32 * 4;
  }

  ngOnInit() {
    console.log(this.selectedFontSize)
    this.keyDownSubscription = this.keyboardService.getKeyDownEvent().subscribe(this.keyDown);
  }

  ngAfterViewInit(): void {
    this.pageWidth = this.renderer.selectRootElement(this.scrollElement.nativeElement, true).offsetWidth + 32 * 4;
  }

  ngOnDestroy() {
    this.keyDownSubscription.unsubscribe();
  }
}
