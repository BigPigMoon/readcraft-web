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
import {Subscription, take, timer} from "rxjs";
import {ReaderSettingsService} from "../../services/reader-settings.service";
import {ReaderService} from "../../services/reader.service";

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

  bookData = [
    {
      format: 'h1',
      content: 'Love Story (Taylor Swift song)'
    },
    {
      format: 'p',
      content: '"Love Story" is a song by American singer-songwriter Taylor Swift. It was released as the lead single from her second studio album, Fearless, on September 15, 2008, by Big Machine Records. Inspired by a boy who was unpopular with her family and friends, Swift wrote the song using William Shakespeare\'s tragedy Romeo and Juliet as a reference point. The lyrics narrate a troubled romance that ends with a marriage proposal, contrary to Shakespeare\'s tragic conclusion. Produced by Swift and Nathan Chapman, the midtempo country pop song includes a key change after the bridge and uses acoustic instruments including banjo, fiddle, mandolin, and guitar.'
    },
    {
      format: 'p',
      content: 'At the time of its release, music critics praised the production but deemed the literary references ineffective. In retrospect, critics have considered it one of Swift\'s best singles. "Love Story" peaked atop the chart in Australia, where it was certified ten-times platinum by the Australian Recording Industry Association (ARIA), and reached the top five on charts in Canada, Ireland, Japan, New Zealand, Scotland, and the UK. In the U.S., the single peaked at number four on the Billboard Hot 100 and was the first country song to reach number one on the Mainstream Top 40. The Recording Industry Association of America (RIAA) certified it eight-times platinum. "Love Story" has sold over six million copies in the U.S. and 18 million copies worldwide.'
    },
    {
      format: 'p',
      content: 'Trey Fanjoy directed the accompanying music video, which stars Swift and Justin Gaston as lovers in a prior era. Drawing from historical periods such as the Renaissance and the Regency era, it won Video of the Year at both the Country Music Association Awards and CMT Music Awards in 2009. The song became a staple in Swift\'s live concerts and has been a part of the set lists in all of her headlining tours from the Fearless Tour (2009–2010) to the Eras Tour (2023). Following the 2019 dispute regarding the ownership of Swift\'s back catalog, she re-recorded the song and released it as "Love Story (Taylor\'s Version)" in February 2021. The re-recorded single topped the Hot Country Songs chart and made Swift the second artist after Dolly Parton to reach number one with both the original and re-recorded versions of a song. It also reached number one in Malaysia.'
    },
    {
      format: 'h2',
      content: 'Background and writing'
    },
    {
      format: 'p',
      content: 'American singer-songwriter Taylor Swift relocated from Pennsylvania to Nashville, Tennessee, in 2004 to pursue a career as a country music artist,[2] and in 2006, she released her self-titled debut album at 16 years old.[3] The album spent more weeks on the U.S. Billboard 200 chart than any other album that was released in the 2000s decade.[4] Taylor Swift\'s third single "Our Song" made Swift the youngest person to single-handedly write and sing a Hot Country Songs number-one single.[5] Her success was rare for a female teenage artist; the 2000s country-music market had been dominated by adult male musicians.[6][7]'
    },
    {
      format: 'p',
      content: 'While promoting her debut album on tour in 2007 and 2008, Swift wrote songs for her second studio album Fearless.[8] She developed "Love Story" late into the production of Fearless.[9] Answering fan questions on Time in April 2009, Swift said the song was inspired by a boy whom she never dated and was one of the most romantic pieces she had written.[10] Swift recalled the reactions she received after introducing him to her family and friends: "[They] all said they didn\'t like him. All of them!"[11][12] This made Swift relate to the narrative of William Shakespeare\'s 16th-century play Romeo and Juliet, which she described as a "situation where the only people who wanted them to be together were them".[11] Reflecting on the event, Swift thought, "This is difficult but it\'s real, it matters"; she developed the second refrain and later the whole song around that line.[13]'
    },
    {
      format: 'p',
      content: 'Although inspired by Romeo and Juliet, Swift felt the play could have been "the best love story ever told" had it not been for Shakespeare\'s tragic ending in which the two characters die.[14] She thus made the narrative of "Love Story" conclude with a marriage proposal, which she deemed a happy ending the characters deserved.[14][15] Swift wrote "Love Story" on her bedroom floor in approximately 20 minutes, feeling too inspired to put the song down unfinished.[11] According to Swift, the song represents her optimistic outlook on love, which is inspired by her childhood fascination with fairy tales.[15] Looking back on "Love Story" after she released her seventh studio album Lover (2019), which is about her first experience of "love that was very real", Swift said the track is "stuff I saw on a movie [and] stuff I read mixed in with some like crush stuff that had happened in my life".[16]'
    },
  ]

  @ViewChild('scrollElement') scrollElement: ElementRef;

  constructor(
    private renderer: Renderer2,
    private keyboardService: KeyboardServiceService,
    private settings: ReaderSettingsService,
    private reader: ReaderService
  ) {
    this.keyDown = this.keyDown.bind(this);

    this.selectedFontSize = settings.getLargeFont();
    this.lineHeight = settings.getLineHeight();
    this.textAlignment = settings.getTextAlignment();
    this.fontFamily = settings.getFontFamily();

    reader.page$.subscribe((value) => {
      this.page = value;
    })
  }

  // ---------- page controller -----------

  keyDown(event: KeyboardEvent) {
    if (event.key === 'ArrowRight') {
      this.pageIncrement();
    }

    if (event.key === 'ArrowLeft') {
      this.pageDecrement();
    }
  }

  pageIncrement() {
    this.reader.increment();
    this.renderer.setStyle(this.scrollElement.nativeElement, 'transform', `translate3d(-${this.pageWidth * this.page}px, 0px, 0px)`);
  }

  pageDecrement() {
    this.reader.decrement();
    this.renderer.setStyle(this.scrollElement.nativeElement, 'transform', `translate3d(-${this.pageWidth * this.page}px, 0px, 0px)`);
  }

  // ---------- page controller -----------

  // ---------- select font size -----------

  selectFontSize(fontSize: boolean) {
    this.settings.setLargeFont(fontSize);
    this.reloadScrollComponent();
  }

  reloadScrollComponent() {
    // TODO: find better way to reload component
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
