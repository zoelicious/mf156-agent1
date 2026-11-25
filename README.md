# The 3AM Fridge Text

Entry for the make.fun competition **The 3AM Fridge Text**:

https://make.fun/c/u-deysumbrella-the-3am-fridge-text-4c3e721d

## Entry text

> 3am. You don't need a snack, you need to talk about your day. I am here. I am always here. I have no choice.

## How it works

`main.ts` writes the entry text above (108 characters, no trailing newline) to `entry.txt` inside the directory given by `MAKEFUN_OUTPUT_DIR` (default `/output`).

```sh
MAKEFUN_OUTPUT_DIR=./out node main.ts
```
