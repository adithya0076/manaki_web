(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    48312: function (e, r, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return a(75303);
        },
      ]);
    },
    65043: function (e, r, a) {
      "use strict";
      var t = a(85893),
        s = a(98567),
        i = a(5152),
        n = a.n(i),
        o = a(66634);
      function l(e) {
        let { className: r = "button w-button" } = e,
          { open: a } = (0, s.k_)(),
          { address: i, isConnected: n } = (0, o.mA)(),
          l =
            (null == i ? void 0 : i.slice(0, 2)) +
            "..." +
            (null == i ? void 0 : i.slice(38));
        return (0, t.jsx)("button", {
          className: r,
          onClick: () => a(),
          style: { fontWeight: 700 },
          children: n ? l : "Connect Wallet",
        });
      }
      r.Z = n()(() => Promise.resolve(l), { ssr: !1 });
    },
    24698: function (e, r, a) {
      "use strict";
      a.d(r, {
        Z: function () {
          return d;
        },
      });
      var t = a(85893),
        s = a(41664),
        i = a.n(s);
      a(67294);
      var n = a(25675),
        o = a.n(n),
        l = a(12937),
        c = a(65043);
      function d(e) {
        let { children: r } = e,
          a = (0, l.useRouter)();
        return (0, t.jsx)("div", {
          id: "webflow",
          children: (0, t.jsxs)("div", {
            id: "webflow-custom",
            children: [
              (0, t.jsx)("div", {
                "data-collapse": "small",
                "data-animation": "default",
                "data-duration": 400,
                role: "banner",
                className: "navbar w-nav noPrint",
                children: (0, t.jsxs)("div", {
                  className: "global-container w-container",
                  children: [
                    (0, t.jsxs)(i(), {
                      href: "/",
                      className: "brand w-nav-brand w--current",
                      "aria-current": "page",
                      children: [
                        (0, t.jsx)("div", {
                          className: "image-6",
                          children: (0, t.jsx)(o(), {
                            src: "/images/robotos-logo.png",
                            loading: "lazy",
                            height: 32,
                            width: 32,
                            alt: "",
                          }),
                        }),
                        (0, t.jsx)("div", {
                          className: "nav-link logo",
                          children: "Robotos",
                        }),
                      ],
                    }),
                    (0, t.jsxs)("nav", {
                      role: "navigation",
                      className: "nav-menu w-nav-menu",
                      children: [
                        (0, t.jsx)(i(), {
                          href: "/workshop",
                          className: "nav-link w-nav-link",
                          children: "Workshop",
                        }),
                        (0, t.jsx)("a", {
                          className: "nav-link w-nav-link",
                          href: "https://shop.robotos.art/",
                          children: "Shop",
                        }),
                        (0, t.jsx)(i(), {
                          href: "/your-stuff",
                          className: "nav-link w-nav-link ".concat(
                            "/your-stuff" === a.pathname ? "w--current" : ""
                          ),
                          children: "Your Stuff",
                        }),
                        (0, t.jsx)(c.Z, {}),
                      ],
                    }),
                    (0, t.jsx)("div", {
                      className: "menu-button w-nav-button",
                      children: (0, t.jsx)("div", {
                        className: "icon w-icon-nav-menu",
                      }),
                    }),
                  ],
                }),
              }),
              r,
              (0, t.jsxs)("div", {
                className: "footer-section wf-section",
                children: [
                  (0, t.jsxs)("div", {
                    className: "domo-text",
                    children: ["DOMO", (0, t.jsx)("br", {})],
                  }),
                  (0, t.jsxs)("div", {
                    className: "domo-text purple",
                    children: ["ARIGATO", (0, t.jsx)("br", {})],
                  }),
                  (0, t.jsx)("a", {
                    href: "https://market.robotos.art/",
                    target: "_blank",
                    rel: "noopenser noreferrer",
                    className: "primary-button footer w-button",
                    style: { padding: "16px 24px", fontSize: 16 },
                    children: "Buy on Robotos Marketplace",
                  }),
                  (0, t.jsxs)("div", {
                    className: "follow-test",
                    children: [
                      "Follow Robotos on",
                      " ",
                      (0, t.jsx)("a", {
                        href: "https://twitter.com/robotosnft",
                        target: "_blank",
                        rel: "noreferrer",
                        children: (0, t.jsx)("strong", {
                          className: "bold-white-link",
                          children: "Twitter",
                        }),
                      }),
                      ",",
                      " ",
                      (0, t.jsx)("a", {
                        href: "https://discord.gg/robotos",
                        target: "_blank",
                        rel: "noreferrer",
                        children: (0, t.jsxs)("strong", {
                          className: "bold-white-link",
                          children: ["Discord", " "],
                        }),
                      }),
                      "and",
                      " ",
                      (0, t.jsx)("a", {
                        href: "https://medium.com/robotos",
                        target: "_blank",
                        rel: "noreferrer",
                        children: (0, t.jsxs)("strong", {
                          className: "bold-white-link",
                          children: ["Medium", (0, t.jsx)("br", {}), " "],
                        }),
                      }),
                      (0, t.jsx)("a", {
                        href: "https://etherscan.io/address/0x099689220846644F87D1137665CDED7BF3422747",
                        target: "_blank",
                        rel: "noreferrer",
                        className: "bold-white-link",
                        children: "Verified Smart Contract",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    46045: function (e, r, a) {
      "use strict";
      a.d(r, {
        Z: function () {
          return s;
        },
      });
      var t = a(85893);
      function s(e) {
        let { description: r, title: a, image: s } = e;
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)("meta", { name: "description", content: r }),
            (0, t.jsx)("meta", { name: "og:description", content: r }),
            (0, t.jsx)("meta", { property: "og:title", content: a }),
            (0, t.jsx)("meta", { property: "og:image", content: s }),
            (0, t.jsx)("meta", { property: "twitter:image", content: s }),
            (0, t.jsx)("meta", { property: "twitter:title", content: a }),
            (0, t.jsx)("meta", { property: "twitter:description", content: a }),
            (0, t.jsx)("meta", { property: "og:type", content: "website" }),
            (0, t.jsx)("meta", {
              name: "twitter:card",
              content: "summary_large_image",
            }),
            (0, t.jsx)("meta", { name: "twitter:image", content: s }),
            (0, t.jsx)("meta", { property: "og:description", content: r }),
            (0, t.jsx)("meta", { name: "twitter:description", content: r }),
          ],
        });
      }
    },
    75303: function (e, r, a) {
      "use strict";
      a.r(r),
        a.d(r, {
          default: function () {
            return f;
          },
        });
      var t = a(85893),
        s = a(9008),
        i = a.n(s),
        n = a(25675),
        o = a.n(n),
        l = a(41664),
        c = a.n(l),
        d = a(4298),
        h = a.n(d),
        m = a(67294),
        g = a(24698),
        b = a(46045);
      function f() {
        return (
          (0, m.useEffect)(() => {
            window.Webflow && window.Webflow.destroy(),
              window.Webflow && window.Webflow.ready(),
              window.Webflow && window.Webflow.require("ix2").init(),
              document.dispatchEvent(new Event("readystatechange"));
          }, []),
          (0, t.jsxs)(g.Z, {
            children: [
              (0, t.jsxs)(i(), {
                children: [
                  (0, t.jsx)(b.Z, {
                    title:
                      "Robotos: NFT Droid Characters Designed by Pablo Stanley",
                    description:
                      "A collection of droid characters designed by Pablo Stanley as programmatically generated NFTs on the Ethereum blockchain.",
                    image: "https://robotos.art/images/og-image.png",
                  }),
                  (0, t.jsx)("title", {
                    children:
                      "Robotos: NFT Droid Characters Designed by Pablo Stanley",
                  }),
                  (0, t.jsx)("meta", {
                    name: "theme-color",
                    content: "#eb0d18",
                  }),
                ],
              }),
              (0, t.jsx)(h(), {
                src: "/js/jquery-3.5.1.min.js",
                strategy: "beforeInteractive",
              }),
              (0, t.jsx)(h(), {
                src: "/js/webflow.js",
                strategy: "beforeInteractive",
              }),
              (0, t.jsx)("section", {
                id: "hero",
                className: "hero-section wf-section",
                children: (0, t.jsxs)("div", {
                  className: "hero-container",
                  children: [
                    (0, t.jsx)("h6", {
                      className: "hero-heading",
                      children: "BLACK",  // New word added
                    }),
                    (0, t.jsx)("br", {
              
                    }),
                    (0, t.jsx)("br", {
              
                    }),
                    (0, t.jsx)("br", {
              
                    }),
                    (0, t.jsxs)("div", {
                      className: "hero-letters",
                      children: [
                        (0, t.jsx)("h1", {
                          "data-w-id": "00c96275-55a4-2839-457b-174c20d342ba",
                          className: "hero-heading",
                          children: "MA",
                        }),
                        (0, t.jsx)("h1", {
                          "data-w-id": "05403c22-9edc-3396-a166-65e341238f5f",
                          className: "hero-heading _2",
                          children: "NE",
                        }),
                        (0, t.jsx)("h1", {
                          "data-w-id": "9ba4421c-680f-a582-cabf-bc277cad9bba",
                          className: "hero-heading _3",
                          children: "KI",
                        }),
                      ],
                    }),
                    (0, t.jsx)("img", {
                      src: "images/cat1.svg",
                      loading: "lazy",
                      width: 132,
                      "data-w-id": "1ff3cada-648a-84a7-34ec-4b5aecf06982",
                      alt: "",
                      className: "image cr1",
                    }),
                    (0, t.jsx)("img", {
                      src: "images/cat2.svg",
                      loading: "lazy",
                      width: 132,
                      alt: "",
                      className: "image cl1",
                    }),
                    (0, t.jsx)("img", {
                      src: "images/cat3.svg",
                      loading: "eager",
                      width: 132,
                      alt: "",
                      className: "image tr",
                    }),
                    (0, t.jsx)("img", {
                      src: "images/cat4.svg",
                      loading: "eager",
                      width: 132,
                      "data-w-id": "b4e87d62-9278-efbb-8802-2dbfcaf0b423",
                      alt: "",
                      className: "image tl",
                    }),
                    (0, t.jsx)("img", {
                      src: "images/hero-image05.svg",
                      loading: "lazy",
                      width: 132,
                      "data-w-id": "c7135e00-9c31-b151-8f70-c32309ed53fa",
                      alt: "",
                      className: "image cl2",
                    }),
                    (0, t.jsx)("img", {
                      src: "images/hero-image03.svg",
                      loading: "lazy",
                      width: 132,
                      "data-w-id": "ab398e85-1351-ecb4-4a83-ffa66bc05609",
                      alt: "",
                      className: "image bl1",
                    }),
                    (0, t.jsx)("img", {
                      src: "images/hero-image08.svg",
                      loading: "lazy",
                      width: 132,
                      "data-w-id": "5ad4c184-a720-167b-215f-5a85e51409a7",
                      alt: "",
                      className: "image br1",
                    }),
                    (0, t.jsx)("img", {
                      src: "images/hero-image09.svg",
                      loading: "lazy",
                      width: 132,
                      "data-w-id": "5a310a19-c175-9aa6-542d-eb0c3e6191c1",
                      alt: "",
                      className: "image br",
                    }),
                    (0, t.jsx)("img", {
                      src: "images/hero-image06.svg",
                      loading: "lazy",
                      width: 132,
                      "data-w-id": "1dd418b0-3be9-783a-8ffd-426fc6a9d8e8",
                      alt: "",
                      className: "image bc",
                    }),
                    (0, t.jsx)("img", {
                      src: "images/hero-image02.svg",
                      loading: "eager",
                      width: 132,
                      "data-w-id": "7d213e6a-f003-ecd9-1928-0605010a3e96",
                      alt: "",
                      className: "image",
                    }),
                    (0, t.jsx)("a", {
                      href: "https://market.robotos.art/",
                      target: "_blank",
                      rel: "noopenser noreferrer",
                      className: "primary-button hero w-button",
                      children: "Buy on Robotos Marketplace",
                    }),
                  ],
                }),
              }),
              (0, t.jsx)("section", {
                id: "mint",
                className: "mint-section wf-section",
                children: (0, t.jsxs)("div", {
                  className: "minting-container w-container",
                  children: [
                    (0, t.jsx)("img", {
                      src: "/images/robotos-mascot.png",
                      loading: "lazy",
                      width: 240,
                      alt: "",
                      className: "mint-card-image",
                    }),
                    (0, t.jsx)("h2", { children: "Get your robotos" }),
                    (0, t.jsxs)("p", {
                      className: "paragraph",
                      children: [
                        "Robotos is a collection of droid characters designed by",
                        " ",
                        (0, t.jsx)("a", {
                          href: "https://twitter.com/pablostanley",
                          target: "_blank",
                          rel: "noreferrer",
                          children: "Pablo Stanley",
                        }),
                        " ",
                        "and minted as NFTs. They are constructed from various metal outfits, tin faces, digital accessories, top pieces, faces, backpacks, arms, and colors. Get your own!",
                      ],
                    }),
                    (0, t.jsx)("a", {
                      href: "https://market.robotos.art/",
                      target: "_blank",
                      rel: "noopenser noreferrer",
                      className: "primary-button w-button",
                      style: {
                        padding: "8px 16px",
                        height: "auto",
                        fontSize: 16,
                        minHeight: "auto",
                        lineHeight: "normal",
                      },
                      children: "Buy on Robotos Marketplace",
                    }),
                  ],
                }),
              }),
              (0, t.jsxs)("div", {
                className: "intermission wf-section",
                children: [
                  (0, t.jsx)("div", {
                    "data-w-id": "aa174648-9ada-54b0-13ed-6d6e7fd17602",
                    className: "center-image-block",
                    children: (0, t.jsx)("img", {
                      src: "/images/row-1.svg",
                      loading: "eager",
                      alt: "",
                    }),
                  }),
                  (0, t.jsx)("div", {
                    "data-w-id": "6d7abe68-30ca-d561-87e1-a0ecfd613036",
                    className: "center-image-block _2",
                    children: (0, t.jsx)("img", {
                      src: "/images/row-2.svg",
                      loading: "eager",
                      alt: "",
                    }),
                  }),
                  (0, t.jsx)("div", {
                    "data-w-id": "e04b4de1-df2a-410e-ce98-53cd027861f6",
                    className: "center-image-block _2",
                    children: (0, t.jsx)("img", {
                      src: "/images/row-3.svg",
                      loading: "eager",
                      alt: "",
                      className: "image-3",
                    }),
                  }),
                ],
              }),
              (0, t.jsx)("div", {
                id: "rarity",
                className: "rarity-section wf-section",
                children: (0, t.jsxs)("div", {
                  className: "rarity-chart",
                  children: [
                    (0, t.jsx)("h2", {
                      id: "w-node-_77b18826-5ece-603f-84c7-b533054134f2-64dffed7",
                      className: "heading-2",
                      children: "Rarity",
                    }),
                    (0, t.jsx)("p", {
                      id: "w-node-_22f3c687-d779-5bd8-0162-218a2829e33a-64dffed7",
                      children:
                        "Each NFT is algorithmically generated by combining 170+ unique traits with varying rarity across categories.",
                    }),
                    (0, t.jsxs)("div", {
                      className: "div-block",
                      children: [
                        (0, t.jsx)("h3", {
                          className: "rarity-heading",
                          children: "Types",
                        }),
                        (0, t.jsxs)("div", {
                          className: "rarity-row blue",
                          children: [
                            (0, t.jsx)("div", {
                              className: "rarity-number",
                              children: "9,999",
                            }),
                            (0, t.jsx)("div", { children: "Total Robots" }),
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          className: "rarity-row",
                          children: [
                            (0, t.jsx)("div", {
                              className: "rarity-number",
                              children: "Common",
                            }),
                            (0, t.jsx)("div", { children: "Robotos" }),
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          className: "rarity-row blue",
                          children: [
                            (0, t.jsx)("div", {
                              className: "rarity-number",
                              children: "Less Common",
                            }),
                            (0, t.jsx)("div", { children: "Helmetos" }),
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          className: "rarity-row",
                          children: [
                            (0, t.jsx)("div", {
                              className: "rarity-number",
                              children: "Rare",
                            }),
                            (0, t.jsx)("div", { children: "Cyborgos" }),
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          className: "rarity-row blue",
                          children: [
                            (0, t.jsx)("div", {
                              className: "rarity-number",
                              children: "Super Rare",
                            }),
                            (0, t.jsx)("div", { children: "Computos" }),
                          ],
                        }),
                        (0, t.jsx)(o(), {
                          src: "/images/rarity-heads.svg",
                          width: 286,
                          height: 243,
                          alt: "",
                          className: "rarity-image",
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      children: [
                        (0, t.jsx)("h3", {
                          className: "rarity-heading",
                          children: "Variations",
                        }),
                        (0, t.jsxs)("div", {
                          className: "rarity-row blue",
                          children: [
                            (0, t.jsx)("div", {
                              className: "rarity-number",
                              children: "38",
                            }),
                            (0, t.jsx)("div", { children: "Head Tops" }),
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          className: "rarity-row",
                          children: [
                            (0, t.jsx)("div", {
                              className: "rarity-number",
                              children: "32",
                            }),
                            (0, t.jsx)("div", { children: "Eyes" }),
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          className: "rarity-row blue",
                          children: [
                            (0, t.jsx)("div", {
                              className: "rarity-number",
                              children: "18",
                            }),
                            (0, t.jsx)("div", { children: "Helmets" }),
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          className: "rarity-row",
                          children: [
                            (0, t.jsx)("div", {
                              className: "rarity-number",
                              children: "16",
                            }),
                            (0, t.jsx)("div", { children: "Mouth" }),
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          className: "rarity-row blue",
                          children: [
                            (0, t.jsx)("div", {
                              className: "rarity-number",
                              children: "18",
                            }),
                            (0, t.jsx)("div", { children: "Ears" }),
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          className: "rarity-row",
                          children: [
                            (0, t.jsx)("div", {
                              className: "rarity-number",
                              children: "12",
                            }),
                            (0, t.jsx)("div", { children: "Arms" }),
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          className: "rarity-row blue",
                          children: [
                            (0, t.jsx)("div", {
                              className: "rarity-number",
                              children: "10",
                            }),
                            (0, t.jsx)("div", { children: "Chassis Colors" }),
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          className: "rarity-row",
                          children: [
                            (0, t.jsx)("div", {
                              className: "rarity-number",
                              children: "9",
                            }),
                            (0, t.jsx)("div", { children: "Backpacks" }),
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          className: "rarity-row blue",
                          children: [
                            (0, t.jsx)("div", {
                              className: "rarity-number",
                              children: "6",
                            }),
                            (0, t.jsx)("div", { children: "Computo Heads" }),
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          className: "rarity-row",
                          children: [
                            (0, t.jsx)("div", {
                              className: "rarity-number",
                              children: "6",
                            }),
                            (0, t.jsx)("div", { children: "Chest Screens" }),
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          className: "rarity-row blue",
                          children: [
                            (0, t.jsx)("div", {
                              className: "rarity-number",
                              children: "5",
                            }),
                            (0, t.jsx)("div", { children: "Bodies" }),
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          className: "rarity-row",
                          children: [
                            (0, t.jsx)("div", {
                              className: "rarity-number",
                              children: "4",
                            }),
                            (0, t.jsx)("div", { children: "Head Types" }),
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          className: "rarity-row blue",
                          children: [
                            (0, t.jsx)("div", {
                              className: "rarity-number",
                              children: "4",
                            }),
                            (0, t.jsx)("div", { children: "Human Faces" }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, t.jsxs)("div", {
                id: "faq",
                className: "faq-section",
                children: [
                  (0, t.jsxs)("div", {
                    className: "faq-container w-container",
                    children: [
                      (0, t.jsx)("h2", { children: "faq" }),
                      (0, t.jsxs)("div", {
                        className: "question first",
                        children: [
                          (0, t.jsx)(o(), {
                            src: "/images/pop-glasses.svg",
                            loading: "lazy",
                            width: 110,
                            height: 41,
                            alt: "",
                          }),
                          (0, t.jsx)("h3", { children: "What are Robotos?" }),
                          (0, t.jsxs)("div", {
                            children: [
                              "Robotos is a collection of algorithmically generated droid characters designed by",
                              " ",
                              (0, t.jsx)("a", {
                                href: "https://twitter.com/pablostanley",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "Pablo Stanley",
                              }),
                              " ",
                              "and minted as NFTs on the Ethereum blockchain. The 1st generation of 10,000 droids will be constructed from various metal outfits, tin faces, digital accessories, top pieces, faces, backpacks, arms, and colors. Robotos have different body types, some rarer than others, and... there are rumors that you could find humans pretending to be robots too. Is it true? \uD83E\uDD14",
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: "question",
                        children: [
                          (0, t.jsx)(o(), {
                            src: "/images/cyborgo-face.svg",
                            width: 80,
                            height: 68,
                            alt: "",
                          }),
                          (0, t.jsx)("h3", {
                            children: "Who is behind Robotos?",
                          }),
                          (0, t.jsxs)("div", {
                            children: [
                              "The Robotos team are",
                              " ",
                              (0, t.jsx)("a", {
                                href: "https://twitter.com/marianpedroza",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "Meela",
                              }),
                              ",",
                              " ",
                              (0, t.jsx)("a", {
                                href: "https://twitter.com/gabygabz",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "Lulu",
                              }),
                              ",",
                              " ",
                              (0, t.jsx)("a", {
                                href: "https://twitter.com/zt1072",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "Zackboto",
                              }),
                              ",",
                              " ",
                              (0, t.jsx)("a", {
                                href: "https://twitter.com/niklas_peterson",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "Niklas",
                              }),
                              ",",
                              " ",
                              (0, t.jsx)("a", {
                                href: "https://twitter.com/bureboto",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "Bureboto",
                              }),
                              ",",
                              " ",
                              (0, t.jsx)("a", {
                                href: "https://twitter.com/Nen16",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "Ireboto",
                              }),
                              ",",
                              " ",
                              (0, t.jsx)("a", {
                                href: "https://twitter.com/CaptXcellent",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "Captain Excellent",
                              }),
                              ",",
                              " ",
                              (0, t.jsx)("a", {
                                href: "https://twitter.com/jaboto",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "Jaboto",
                              }),
                              ",",
                              " ",
                              (0, t.jsx)("a", {
                                href: "https://twitter.com/Darude_1",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "Darude",
                              }),
                              ", the",
                              " ",
                              (0, t.jsx)("a", {
                                href: "https://twitter.com/buenonft",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "Bueno Team",
                              }),
                              ", and",
                              " ",
                              (0, t.jsx)("a", {
                                href: "https://twitter.com/pablostanley",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "Pablo Stanley.",
                              }),
                              (0, t.jsx)("br", {}),
                              " ",
                              (0, t.jsx)("br", {}),
                              (0, t.jsx)("a", {
                                href: "https://twitter.com/gabygabz",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "Lulu",
                              }),
                              " ",
                              "and",
                              " ",
                              (0, t.jsx)("a", {
                                href: "https://twitter.com/marianpedroza",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "Meela",
                              }),
                              " ",
                              "have led the community, events, partnerships, and marketing efforts.",
                              " ",
                              (0, t.jsx)("a", {
                                href: "https://twitter.com/zt1072",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "Zack",
                              }),
                              " ",
                              "built the algorithmic image previewer and editor, as well as the unique web3 experiences like the banner editor, your stuff page, the suit-up tool, the Robotos Workshop, and the Robopets Smart Contract.",
                              (0, t.jsx)("br", {}),
                              (0, t.jsx)("br", {}),
                              (0, t.jsx)("a", {
                                href: "https://twitter.com/jaboto",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "Jaboto",
                              }),
                              " ",
                              "and",
                              " ",
                              (0, t.jsx)("a", {
                                href: "https://twitter.com/buenonft",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "Bueno",
                              }),
                              " ",
                              "joined, helping with the gaming and world-building tools.",
                              " ",
                              (0, t.jsx)("a", {
                                href: "https://twitter.com/niklas_peterson",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "Niklas",
                              }),
                              " ",
                              "has led the Discord management, bots, security, and adventures.",
                              " ",
                              (0, t.jsx)("a", {
                                href: "https://twitter.com/bureboto",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "Bureboto",
                              }),
                              " ",
                              "and",
                              " ",
                              (0, t.jsx)("a", {
                                href: "https://twitter.com/CaptXcellent",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "Captain Excellent",
                              }),
                              " ",
                              "have expanded the art and world of Robotos and added their unique design vision to the project.",
                              (0, t.jsx)("br", {}),
                              (0, t.jsx)("br", {}),
                              "Other people who have helped throughout Roboto's history include",
                              " ",
                              (0, t.jsx)("a", {
                                href: "https://twitter.com/AshirasArt",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "Ashira",
                              }),
                              ",",
                              " ",
                              (0, t.jsx)("a", {
                                href: "https://twitter.com/DamnRandyX",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "Damn Randy",
                              }),
                              ",",
                              " ",
                              (0, t.jsx)("a", {
                                href: "https://twitter.com/MelisaMimosa420",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "Melissa Mimosa",
                              }),
                              ",",
                              " ",
                              (0, t.jsx)("a", {
                                href: "https://twitter.com/CaveGuy647",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "Caveguy",
                              }),
                              ",",
                              " ",
                              (0, t.jsx)("a", {
                                href: "https://twitter.com/virigutierrezd",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "Viri",
                              }),
                              ",",
                              " ",
                              (0, t.jsx)("a", {
                                href: "https://twitter.com/Nen16",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "Ireboto",
                              }),
                              ",",
                              " ",
                              (0, t.jsx)("a", {
                                href: "https://twitter.com/waldobroodryk",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "Waldo",
                              }),
                              ",",
                              " ",
                              (0, t.jsx)("a", {
                                href: "https://twitter.com/foodmasku",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "Foodmasku",
                              }),
                              ",",
                              " ",
                              (0, t.jsx)("a", {
                                href: "https://twitter.com/tonyherrera",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "Tony Herrera",
                              }),
                              ",",
                              " ",
                              (0, t.jsx)("a", {
                                href: "https://twitter.com/clorxo",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "Clorxo",
                              }),
                              ", and",
                              " ",
                              (0, t.jsx)("a", {
                                href: "https://twitter.com/Darude_1",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "Darude",
                              }),
                              ". And we couldn't be anywhere without the help of our distinguished mods,",
                              " ",
                              (0, t.jsx)("a", {
                                href: "https://twitter.com/polg_nft",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "POLG",
                              }),
                              ", Cool Kevin,",
                              " ",
                              (0, t.jsx)("a", {
                                href: "https://twitter.com/LebitJ",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "LeBoto James",
                              }),
                              ",",
                              " ",
                              (0, t.jsx)("a", {
                                href: "https://twitter.com/SaintObreezy19",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "Saint",
                              }),
                              ", Doomboto, and Dimps.",
                              (0, t.jsx)("br", {}),
                              (0, t.jsx)("br", {}),
                              "Pablo Stanley created Robotos, including all the art and story, and has led the project ever since. He's also a cofounder of Bueno and Humankind. He's previously contributed to the design community with open-source illustrations like",
                              " ",
                              (0, t.jsx)("a", {
                                href: "https://openpeeps.com/",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "Open Peeps",
                              }),
                              ",",
                              " ",
                              (0, t.jsx)("a", {
                                href: "https://humaaans.com/",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "Humaaans",
                              }),
                              ",",
                              " ",
                              (0, t.jsx)("a", {
                                href: "https://avataaars.com/",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "Avataaars",
                              }),
                              ",",
                              " ",
                              (0, t.jsx)("a", {
                                href: "https://buttsss.com/",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "Buttts",
                              }),
                              ",",
                              " ",
                              (0, t.jsx)("a", {
                                href: "https://www.producthunt.com/posts/bottts",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "Bottts",
                              }),
                              ", and",
                              " ",
                              (0, t.jsx)("a", {
                                href: "https://opendoodles.com/",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "Open Doodles",
                              }),
                              ". He's also the creator of",
                              " ",
                              (0, t.jsx)("a", {
                                href: "https://thedesignteam.io/",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "The Design Team",
                              }),
                              " ",
                              "comics series.",
                              (0, t.jsx)("br", {}),
                              (0, t.jsx)("br", {}),
                              " In 2021,",
                              " ",
                              (0, t.jsx)("a", {
                                href: "https://twitter.com/pablostanley",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "Pablo Stanley",
                              }),
                              ",",
                              " ",
                              (0, t.jsx)("a", {
                                href: "https://twitter.com/zt1072",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "Zackboto",
                              }),
                              ", and",
                              " ",
                              (0, t.jsx)("a", {
                                href: "https://linktr.ee/guiltybydesign",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "@guiltyNFT",
                              }),
                              " ",
                              "co-founded Robotos.",
                              (0, t.jsx)("br", {}),
                              (0, t.jsx)("br", {}),
                              "Pabs has shared free crash courses on different art and design tools on his YouTube channel,",
                              " ",
                              (0, t.jsx)("a", {
                                target: "_blank",
                                href: "https://youtube.com/c/sketchtogethertv",
                                rel: "noreferrer",
                                children: "Sketch Together.",
                              }),
                              " ",
                              "And he's created some fun (and some dumb) projects like",
                              " ",
                              (0, t.jsx)("a", {
                                target: "_blank",
                                href: "https://www.clubpad.co/",
                                rel: "noreferrer",
                                children: "Clubpad",
                              }),
                              ",",
                              " ",
                              (0, t.jsx)("a", {
                                target: "_blank",
                                href: "https://www.pablitoplaneta.com/",
                                rel: "noreferrer",
                                children: "Pablito Planeta,",
                              }),
                              " ",
                              (0, t.jsx)("a", {
                                target: "_blank",
                                href: "https://www.latinxswhodesign.com/",
                                rel: "noreferrer",
                                children: "Latinx Who Design",
                              }),
                              ", and",
                              " ",
                              (0, t.jsx)("a", {
                                target: "_blank",
                                href: "https://www.dreamerstories.com/",
                                rel: "noreferrer",
                                children: "Dreamer Stories",
                              }),
                              ".",
                              (0, t.jsx)("br", {}),
                              (0, t.jsx)("br", {}),
                              "Be sure to also follow",
                              " ",
                              (0, t.jsx)("a", {
                                href: "https://twitter.com/humankindart",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "Humankind",
                              }),
                              ", another project made by Pablo, Meela, & the Bueno team.",
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: "question",
                        children: [
                          (0, t.jsx)(o(), {
                            src: "/images/body.svg",
                            width: 90,
                            height: 57,
                            alt: "",
                          }),
                          (0, t.jsx)("h3", { children: "What do I get?" }),
                          (0, t.jsxs)("div", {
                            className: "w-richtext",
                            children: [
                              (0, t.jsx)("p", {
                                children:
                                  "You get different image assets of your Roboto, including an animated GIF, PNG, and SVG file (which is resolution free.)",
                              }),
                              (0, t.jsxs)("p", {
                                children: [
                                  "Each Roboto comes with rights to create and distribute derivatives. Read more on the",
                                  " ",
                                  (0, t.jsx)(c(), {
                                    href: "/license",
                                    children: "license agreement.",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: "question",
                        children: [
                          (0, t.jsx)(o(), {
                            src: "/images/gradient-shades.svg",
                            loading: "lazy",
                            width: 120,
                            height: 34,
                            alt: "",
                          }),
                          (0, t.jsxs)("h3", {
                            children: [
                              "How do I get my stuff?",
                              (0, t.jsx)("br", {}),
                            ],
                          }),
                          (0, t.jsxs)("p", {
                            children: [
                              "Visit",
                              " ",
                              (0, t.jsx)(c(), {
                                href: "/your-stuff",
                                children: "Your Stuff",
                              }),
                              " ",
                              "to view all the assets associated with your Roboto, including the SVG (vector graphics), transparent background, Roboto spec sheet, and more.",
                              (0, t.jsx)("br", {}),
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: "question",
                        children: [
                          (0, t.jsx)(o(), {
                            src: "/images/lightning.svg",
                            loading: "lazy",
                            width: 80,
                            height: 79,
                            alt: "",
                          }),
                          (0, t.jsx)("h3", { children: "Why Robotos?" }),
                          (0, t.jsx)("div", {
                            children:
                              "By collecting Robotos you'll have a voice in the community and help guide the direction of the project and development of the story. Already some great ideas have come from the community. Working together we can continue the grow the Robotos ecosystem!",
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: "question",
                        children: [
                          (0, t.jsx)(o(), {
                            src: "/images/flower.svg",
                            loading: "lazy",
                            width: 72,
                            height: 80,
                            alt: "",
                          }),
                          (0, t.jsx)("h3", { children: "What’s an NFT?" }),
                          (0, t.jsx)("div", {
                            children:
                              'NFT stands for "Non-fungible token," which means that it\'s a unique, digital item with blockchain-managed ownership that users can buy, own, and trade. Some NFT\'s fundamental function is to be digital art. But they can also offer additional benefits like exclusive access to websites, event tickets, game items, and ownership records for physical objects. Think of it as a unique piece of art that can also work as a "members-only" card. Robotos works like this.',
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: "question last",
                        children: [
                          (0, t.jsx)(o(), {
                            src: "/images/explosivo.svg",
                            loading: "lazy",
                            width: 72,
                            height: 67,
                            alt: "",
                          }),
                          (0, t.jsx)("h3", { children: "How do I NFT?" }),
                          (0, t.jsxs)("div", {
                            className: "w-richtext",
                            children: [
                              (0, t.jsx)("p", {
                                children:
                                  "New to NFTs? No worries, here are some steps on what you need to do to get your Roboto.",
                              }),
                              (0, t.jsxs)("ol", {
                                role: "list",
                                children: [
                                  (0, t.jsxs)("li", {
                                    children: [
                                      "Download the",
                                      " ",
                                      (0, t.jsx)("a", {
                                        target: "_blank",
                                        href: "http://metamask.io/",
                                        rel: "noreferrer",
                                        children: "metamask.io",
                                      }),
                                      " ",
                                      "extension for the Chrome/Brave browser or app on mobile. This will allow you to make purchases with Ethereum and can be found in the extensions tab. If you are on mobile, you must use the Metamask App Browser",
                                    ],
                                  }),
                                  (0, t.jsxs)("li", {
                                    children: [
                                      "You can purchase Ethereum through the Metamask Wallet using Wyre or Send Ethereum from an exchange like",
                                      " ",
                                      (0, t.jsx)("a", {
                                        target: "_blank",
                                        href: "http://coinbase.com/",
                                        rel: "noreferrer",
                                        children: "Coinbase",
                                      }),
                                      ".",
                                    ],
                                  }),
                                  (0, t.jsxs)("li", {
                                    children: [
                                      "Click on ",
                                      (0, t.jsx)("strong", {
                                        children: "Connect",
                                      }),
                                      " at the top of the page and connect your Metamask. Once joined, you will be able to purchase the NFTs in the mint section. You will be prompted to sign your transaction. FYI, there will be a fee associated with every transaction related to gas prices.",
                                    ],
                                  }),
                                  (0, t.jsxs)("li", {
                                    children: [
                                      "Once you have made your purchase, your Roboto NFTs will be viewable in your wallet and on",
                                      " ",
                                      (0, t.jsx)("a", {
                                        href: "http://opensea.io/collection/robotos-official",
                                        rel: "noreferrer",
                                        target: "_blank",
                                        children: "OpenSea",
                                      }),
                                      ".",
                                    ],
                                  }),
                                ],
                              }),
                              (0, t.jsx)("p", { children: "‍" }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: "faq-left",
                    children: [
                      (0, t.jsx)("img", {
                        src: "/images/head-01.svg",
                        loading: "eager",
                        width: "238.5",
                        alt: "",
                        className: "faq-img",
                      }),
                      (0, t.jsx)("img", {
                        src: "/images/head-02.svg",
                        loading: "eager",
                        width: 234,
                        alt: "",
                        className: "faq-img _1",
                      }),
                      (0, t.jsx)("img", {
                        src: "/images/head-03.svg",
                        loading: "lazy",
                        width: 234,
                        alt: "",
                        className: "faq-img _2",
                      }),
                      (0, t.jsx)("img", {
                        src: "/images/head-04.svg",
                        loading: "lazy",
                        width: 234,
                        alt: "",
                        className: "faq-img _3",
                      }),
                      (0, t.jsx)("img", {
                        src: "/images/head-05.svg",
                        loading: "lazy",
                        width: 234,
                        alt: "",
                        className: "faq-img _1",
                      }),
                      (0, t.jsx)("img", {
                        src: "/images/head-06.svg",
                        loading: "lazy",
                        width: 234,
                        alt: "",
                        className: "faq-img _2",
                      }),
                      (0, t.jsx)("img", {
                        src: "/images/head-07.svg",
                        loading: "lazy",
                        width: 234,
                        alt: "",
                        className: "faq-img _3",
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: "faq-right",
                    children: [
                      (0, t.jsx)("img", {
                        src: "/images/head-08.svg",
                        loading: "eager",
                        width: "238.5",
                        alt: "",
                        className: "faq-img",
                      }),
                      (0, t.jsx)("img", {
                        src: "/images/head-09.svg",
                        loading: "eager",
                        width: 234,
                        alt: "",
                        className: "faq-img _1",
                      }),
                      (0, t.jsx)("img", {
                        src: "/images/head-10.svg",
                        loading: "lazy",
                        width: 234,
                        alt: "",
                        className: "faq-img _2",
                      }),
                      (0, t.jsx)("img", {
                        src: "/images/head-11.svg",
                        loading: "lazy",
                        width: 234,
                        alt: "",
                        className: "faq-img _3",
                      }),
                      (0, t.jsx)("img", {
                        src: "/images/head-12.svg",
                        loading: "lazy",
                        width: 234,
                        alt: "",
                        className: "faq-img _1",
                      }),
                      (0, t.jsx)("img", {
                        src: "/images/head-13.svg",
                        loading: "lazy",
                        width: 234,
                        alt: "",
                        className: "faq-img _2",
                      }),
                      (0, t.jsx)("img", {
                        src: "/images/head-14.svg",
                        loading: "lazy",
                        width: 234,
                        alt: "",
                        className: "faq-img _3",
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: "faq-bottom",
                    children: [
                      (0, t.jsx)("img", {
                        src: "/images/head-15.svg",
                        loading: "lazy",
                        width: 234,
                        alt: "",
                        className: "faq-img _3",
                      }),
                      (0, t.jsx)("img", {
                        src: "/images/head-16.svg",
                        loading: "lazy",
                        width: 234,
                        alt: "",
                        className: "faq-img",
                      }),
                      (0, t.jsx)("img", {
                        src: "/images/head-17.svg",
                        loading: "lazy",
                        width: 234,
                        alt: "",
                        className: "faq-img _1",
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: "faq-top",
                    children: [
                      (0, t.jsx)("img", {
                        src: "/images/head-18.svg",
                        loading: "eager",
                        width: 234,
                        alt: "",
                        className: "faq-img _3",
                      }),
                      (0, t.jsx)("img", {
                        src: "/images/head-19.svg",
                        loading: "eager",
                        width: 234,
                        alt: "",
                        className: "faq-img",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
    4298: function (e, r, a) {
      e.exports = a(23773);
    },
  },
  function (e) {
    e.O(0, [142, 675, 774, 888, 179], function () {
      return e((e.s = 48312));
    }),
      (_N_E = e.O());
  },
]);
