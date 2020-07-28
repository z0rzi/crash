include karax / prelude
import dom, random

let somequotes = [
  (Quote: "Wow that's a quote!", Author: "baba"),
  (Quote: "And that's another one", Author: "baba"),
  (Quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a porttitor", Author: "baba"),
  (Quote: "urna. Cras odio leo, efficitur volutpat orci ac, scelerisque consectetur", Author: "baba"),
  (Quote: "purus. Mauris convallis nisl non diam vulputate sodales sit amet eget ante.", Author: "baba"),
  (Quote: "Aliquam vestibulum dui sit amet massa suscipit, vitae elementum leo", Author: "baba"),
  (Quote: "fermentum. Nulla imperdiet mi ligula, vitae feugiat dui vestibulum in.", Author: "baba"),
  (Quote: "Aliquam augue arcu, facilisis non purus et, malesuada rhoncus orci. Duis sed", Author: "baba"),
  (Quote: "cursus elit, ut bibendum quam. Aenean volutpat euismod suscipit. Suspendisse", Author: "baba"),
  (Quote: "rutrum maximus nulla id maximus. Nam ac facilisis elit, id semper justo.", Author: "baba"),
  (Quote: "Mauris tincidunt lacus ac mi ultricies euismod. Nunc sed eros nisi.", Author: "baba")
]

proc getQuote =
  let Quote = document.querySelector(".QuoteDisplay")
  let Author = document.querySelector("#author")

  randomize()

  var Rq = sample(somequotes) # random quote

  Quote.innerHTML = Rq.Quote
  Author.innerHTML = Rq.Author

proc main(): VNode =
  result = buildHtml(tdiv):
      body:
        tdiv(class="content-box"):
          tdiv(class="logo"):
            text "nim"
          tdiv(class="Quote-box"):
            h1(class="Quote"):
              text "Random Quote Generator"
            h4(class="QuoteDisplay"):
              text "Quote display"

            p(id="author"):
              text "author"

            button(id="btn", onclick=getQuote):
              text "Click me!"


setRenderer main
