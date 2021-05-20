import Inews from "@/interafces/news-articles";

const mockData: Inews[] = [
  {
    images: [
      {
        name: "Brighton welcome back fans by stunning City",
        width: 576,
        alt: "",
        caption:
          "The Seagulls overturned a two-goal deficit to provide their supporters the perfect gift on their return to the stands.",
        url: "https://a.espncdn.com/media/motion/ESPNi/2021/0518/int_210518_SOC_PL_Highlights_Brighton_welcome_back_fans_by_stunning_City_20210519/int_210518_SOC_PL_Highlights_Brighton_welcome_back_fans_by_stunning_City_20210519.jpg",
        height: 324,
      },
    ],
    description:
      "The Seagulls overturned a two-goal deficit to provide their supporters the perfect gift on their return to the stands.",
    published: "2021-05-19T03:06:59Z",
    type: "Media",
    premium: false,
    links: {
      api: {
        news: {
          href: "http://api-app.espn.com/v1/video/clips/4389450?region=GB",
        },
        self: {
          href: "http://api-app.espn.com/v1/video/clips/4389450?region=GB",
        },
      },
      web: {
        href: "http://www.espn.com/soccer/video/latest-videos/600/video/4389450",
        short: {},
      },
    },
    lastModified: "2021-05-19T03:06:59Z",
    categories: [
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
        createDate: "2021-05-19T03:04:10Z",
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
        id: 4127,
        description: "Manchester City",
        type: "team",
        sportId: 600,
        teamId: 382,
        team: {
          id: 382,
          description: "Manchester City",
          links: {
            api: {
              teams: {
                href: "https://sports.core.api.espn.com/v2/sports/soccer/teams/382",
              },
            },
            web: {
              teams: {
                href: "http://www.espn.com/soccer/club/_/id/382",
              },
            },
            mobile: {
              teams: {
                href: "http://m.espn.com/soccer/clubhouse?teamId=382",
              },
            },
          },
        },
        uid: "s:600~t:382",
        createDate: "2021-05-19T03:04:10Z",
      },
      {
        id: 21796,
        description: "Brighton & Hove Albion",
        type: "team",
        sportId: 600,
        teamId: 331,
        team: {
          id: 331,
          description: "Brighton & Hove Albion",
          links: {
            api: {
              teams: {
                href: "https://sports.core.api.espn.com/v2/sports/soccer/teams/331",
              },
            },
            web: {
              teams: {
                href: "http://www.espn.com/soccer/club/_/id/331",
              },
            },
            mobile: {
              teams: {
                href: "http://m.espn.com/soccer/clubhouse?teamId=331",
              },
            },
          },
        },
        uid: "s:600~t:331",
        createDate: "2021-05-19T03:04:10Z",
      },
      {
        type: "guid",
        guid: "78c91a3f9e5ec8fe8fca778e97cb021a",
        createDate: "2021-05-19T03:04:10Z",
      },
      {
        type: "guid",
        guid: "6949f3af-300c-35f1-beab-b95669eedd38",
        createDate: "2021-05-19T03:04:10Z",
      },
      {
        type: "guid",
        guid: "94fd5d7e35b19d52c9f24a37259bea36",
        createDate: "2021-05-19T03:04:10Z",
      },
    ],
    headline: "Brighton welcome back fans by stunning City",
  },
];
export default mockData;
