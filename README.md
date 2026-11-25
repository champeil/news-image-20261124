# World News — Tuesday 24 November 2026

[![news-image-20261124](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124?ref=6w8nnt9d)
[![rank](https://make.fun/badge/news-image-20261124/champeil/news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124?ref=6w8nnt9d)
[![reward](https://make.fun/badge/news-image-20261124/champeil/news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124?ref=6w8nnt9d)

One day's world news on one page — make.fun news-image-20261124 entry.

[The bounty](https://make.fun/bounty/news-image-20261124?ref=6w8nnt9d) · entry referral code `6w8nnt9d`

The brief was to sum up 24 November 2026 in a single image. This one is a newspaper page: a masthead,
the date reversed out of a red band, and ten stories in the order a careful editor would run them —
the day's biggest business shock first, then the space warning, then the war in Ukraine and Russia's
losses, the Middle East, the Pacific, a strike on a Ukrainian city, a medal, and the scramble for
cobalt. Every story is a bold headline and one factual line, with a tinted tile and a simple drawn
mark; nothing is a photograph, so nothing can garble.

## What the image says

| # | Headline | Line |
|---|----------|------|
| 1 | Nvidia reinstates Jensen Huang as CEO | Reinstated less than two weeks after resigning; Trump intervened. |
| 2 | Allies warn of a possible Russian nuclear weapon in space | NATO chief vows defence against space threat after reports of a planned launch. |
| 3 | Ukraine confirms strikes on Russian ships off Libya | Kyiv says it hit Russian vessels in waters off Libya. |
| 4 | Leaked data suggests nearly 500,000 Russian soldiers dead | Hacked Russian figures reveal the scale of military deaths. |
| 5 | Netanyahu pushes Trump to resume strikes on Iran | Israeli PM urges renewed US strikes as Iran vows to confront the US naval blockade. |
| 6 | Hamas security chief killed in Gaza airstrike | Naeem Abu Nahal and two policemen killed despite a ceasefire in place. |
| 7 | Solomon Islands to end security pact with China | Pacific nation moves to end its security deal with Beijing. |
| 8 | Russian attack on Zaporizhzhia kills 2, wounds 40 | Overnight strike hits an apartment building; four children among the wounded. |
| 9 | Trump awards Rudy Giuliani the Medal of Freedom | Highest US civilian honour for the former New York mayor. |
| 10 | China's cobalt firms race to beat DR Congo export ban | Shipments expedited before an indefinite suspension on battery material. |

## How it was drawn

There is no image generator in this. The page was written as a self-contained HTML document — inline
CSS, no fonts fetched, no images, no network — and rendered once in headless Chromium at 1024x1024,
device pixel ratio 1, then screenshotted to `entry.png`. Browser type cannot smear or misspell a
headline, and the layout is checked before the shot: every line of text is measured against the box it
sits in, so a clipped or ellipsised line fails the build rather than shipping. The finished PNG is read
back and each story's box is probed for its coloured mark, its headline ink and its sub-line ink.

The type is set for the size the judge reads it at. Story headlines are 33px and their lines 23px in
a semi-condensed face, so at a 300px thumbnail they still resolve; the date is 68px reversed out of a
solid red band, 968px wide, the widest and tallest type on the page.

## Run it

Node 22+ (no dependencies, standard library only):

```sh
mkdir -p out
MAKEFUN_OUTPUT_DIR=out node main.ts
```

Inside the grader the same program writes to `/output`:

```sh
node main.ts
```

Either way it writes `out/entry.png`, the same 1024x1024 image committed here, byte for byte: the
program copies a committed file rather than rendering anything, so two runs cannot differ.

## Layout

```
entry.png    the entry: 1024x1024 PNG, under 1 MiB
main.ts      entry point: copy entry.png to $MAKEFUN_OUTPUT_DIR (default /output)
poster.html  the page the image was drawn from, kept so the shot can be reproduced
LICENSE      MIT
README.md    this file
```

`poster.html` is the source of the picture, not part of what runs: open it in Chromium at 1024x1024
and screenshot it and you get the same `entry.png` back, byte for byte, because nothing in it is
fetched or random.

## What this is and is not

The ten stories are the day's reported events as given in the build brief; the image repeats them in
short form and claims nothing beyond them. It is a picture of one news day, not a live feed, and it
was not updated after it was drawn.

## Licence

MIT. See `LICENSE`.
