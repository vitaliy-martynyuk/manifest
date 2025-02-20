# MANIFEST

To start this project locally, follow the next steps:

1. `fork` or `clone` repository to a local machine
2. in the project's root create a `.env.local` file using `.env.example` as a template and DM me for `NEXT_PUBLIC_GROWTHBOOK_CLIENT_KEY` value
3. in the project's root run the following commands:
   1. `npm i`
   2. `npm run dev`

---

**IF** you were not lucky enough to face **Test option** **OR** you got the **Test option**, but the timer went out, and you want to continue testing - feel free to delete `gb-next-uuid` and `gb-next-timer` in your browser's cookies and refresh the page.

> **_NOTE:_** Occasionally you may face a bug with timer(when you have a **Test option**, refresh `gb-next-uuid` and still get a **Test option** for new id - you will be facing previous value as the start of countdown). That can easily be fixed by refreshing `gb-next-uuid` a couple of times until you get **Control option**
