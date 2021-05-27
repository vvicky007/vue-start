import Iarticle from "@/interafces/news-articles";
const data: Iarticle[] = [
  {
    images: [
      {
        name: "Tottenham corner flag [1296x729]",
        width: 1296,
        alt: "logo",
        caption: "Photo by NEIL HALL/POOL/AFP via Getty Images",
        url: "https://a.espncdn.com/photo/2021/0521/r857027_1296x729_16-9.jpg",
        height: 729,
      },
      {
        name: "Why racism needs a European Super League-esque response",
        width: 576,
        caption:
          "Nedum Onuoha joins The Conversation and compares fan reaction to the European Super League and racism in football.",
        url: "https://a.espncdn.com/media/motion/ESPNi/2021/0514/int_210514_Why_racism_needs_a_European_Super_League_esque_response/int_210514_Why_racism_needs_a_European_Super_League_esque_response.jpg",
        height: 324,
        alt: "logo",
      },
    ],
    description:
      "The Metropolitan Police has arrested eight men following an investigation into online racist abuse directed at an unnamed Tottenham player.",
    published: "2021-05-21T09:14:02Z",
    type: "Story",
    premium: false,
    links: {
      api: {
        news: {
          href: "http://now.core.api.espn.com/v1/sports/news/4390820?region=GB",
        },
        self: {
          href: "http://now.core.api.espn.com/v1/sports/news/4390820?region=GB",
        },
      },
      web: {
        href: "http://www.espnfc.com/tottenham-hotspur-engtottenham/story/4390820/police-arrest-eight-men-for-online-racist-abuse-aimed-at-unnamed-tottenham-player",
        short: {},
      },
    },
    lastModified: "2021-05-21T09:13:54Z",
    categories: [
      {
        id: 4117,
        description: "Tottenham Hotspur",
        type: "team",
        sportId: 600,
        teamId: 367,
        team: {
          id: 367,
          description: "Tottenham Hotspur",
          links: {
            api: {
              teams: {
                href: "https://sports.core.api.espn.com/v2/sports/soccer/teams/367",
              },
            },
            web: {
              teams: {
                href: "http://www.espn.com/soccer/club/_/id/367",
              },
            },
            mobile: {
              teams: {
                href: "http://m.espn.com/soccer/clubhouse?teamId=367",
              },
            },
          },
        },
        uid: "s:600~t:367",
        createDate: "2021-05-21T09:14:02Z",
      },
      {
        id: 2953,
        description: "English Premier League",
        type: "league",
        sportId: 600,
        leagueId: 23,
        league: {
          id: 700,
          abbreviation: "Prem",
          description: "ENG.1",
          links: {
            api: {
              leagues: {
                href: "https://sports.core.api.espn.com/v2/sports/soccer/leagues/eng.1",
              },
            },
            web: {
              leagues: {
                href: "http://www.espn.com/soccer/league/_/name/ENG.1/english-premier-league",
              },
            },
            mobile: {
              leagues: {
                href: "http://m.espn.com/soccer/section?id=ENG.1&lang=EN",
              },
            },
          },
        },
        uid: "s:600~l:700",
      },
      {
        id: 2945,
        description: "Soccer",
        type: "league",
        sportId: 600,
        leagueId: 600,
        league: {
          id: 600,
          description: "Soccer",
          links: {
            api: {
              leagues: {
                href: "https://sports.core.api.espn.com/v2/sports/soccer",
              },
            },
            web: {
              leagues: {
                href: "https://www.espn.com/soccer/",
              },
            },
            mobile: {
              leagues: {
                href: "http://espnfc.com/",
              },
            },
          },
        },
        uid: "s:600",
        createDate: "2021-05-21T09:14:02Z",
      },
      {
        type: "guid",
        guid: "f987a4b2f3f9e7f6eb7deda43893be5a",
        createDate: "2021-05-21T09:14:02Z",
      },
      {
        type: "guid",
        guid: "6949f3af-300c-35f1-beab-b95669eedd38",
        createDate: "2021-05-21T09:14:02Z",
      },
    ],
    headline:
      "Police arrest eight men for online racist abuse aimed at unnamed Tottenham player",
  },
];
export default data;
