export const searchIndex = [
  {
    "title": "",
    "headers": [],
    "path": "/timeline/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/posts/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/friendship-link/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "前端社区",
    "headers": [],
    "path": "/Community/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "前端文档",
    "headers": [
      {
        "level": 2,
        "title": "前端基础",
        "slug": "前端基础",
        "link": "#前端基础",
        "children": []
      },
      {
        "level": 2,
        "title": "前端框架",
        "slug": "前端框架",
        "link": "#前端框架",
        "children": [
          {
            "level": 3,
            "title": "Vue",
            "slug": "vue",
            "link": "#vue",
            "children": []
          },
          {
            "level": 3,
            "title": "React",
            "slug": "react",
            "link": "#react",
            "children": []
          },
          {
            "level": 3,
            "title": "Svelte",
            "slug": "svelte",
            "link": "#svelte",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "服务端",
        "slug": "服务端",
        "link": "#服务端",
        "children": []
      },
      {
        "level": 2,
        "title": "移动端",
        "slug": "移动端",
        "link": "#移动端",
        "children": []
      },
      {
        "level": 2,
        "title": "桌面端",
        "slug": "桌面端",
        "link": "#桌面端",
        "children": []
      }
    ],
    "path": "/Document/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "前端工具",
    "headers": [
      {
        "level": 2,
        "title": "开发工具",
        "slug": "开发工具",
        "link": "#开发工具",
        "children": []
      }
    ],
    "path": "/Tools/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/404.html",
    "pathLocale": "/",
    "extraFields": []
  }
]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSearchIndex) {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ searchIndex }) => {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  })
}
