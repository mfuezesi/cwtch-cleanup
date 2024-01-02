import type { PayloadHandler } from 'payload/config'
import ical from 'ical-generator'
import moment from 'moment'
import { log } from 'console'

// endpoint: http://10.10.5.126:3000/api/cal

export const calendar: PayloadHandler = async (req, res): Promise<void> => {
  const { user, payload } = req

  //   if (!user) {
  //     res.status(401).json({ error: 'Unauthorized' })
  //     return
  //   }

  try {
    const events = await payload.find({
      collection: 'events',
      pagination: false,
    })

    var result = events.docs.map(event => ({
      summary: event.title,
      // summary: "Blocked",
      start: event.dateFrom,
      end: event.dateTo,
      description:
        'Client: ' +
        event.relatedClient.firstname +
        '\nResponsible: ' +
        event.relatedMember.firstname +
        '\nCleaner: ' +
        event.relatedCleaner.firstname,
    }))

    events.docs.map(event => {
      console.log(event.relatedClient)
    })

    console.log(events)

    const calendar = ical({
      name: 'CWTCH',
      prodId: '//superman-industries.com//ical-generator//EN',
      events: result,
      // events: [
      //   {
      //     start: moment(),
      //     end: moment().add(1, 'hour'),
      //     summary: 'Example Event',
      //     description: 'It works ;)',
      //     url: 'https://example.com',
      //   },
      //   {
      //     start: moment().add(2, 'hour'),
      //     end: moment().add(1, 'hour'),
      //     summary: 'Example Event 2',
      //     description: 'It works ;)',
      //     url: 'https://example.com',
      //   },
      // ],
    })

    // res.json({ success: true })
    res.writeHead(200, {
      'Content-Type': 'text/calendar; charset=utf-8',
      'Content-Disposition': 'attachment; filename="calendar.ics"',
    })

    res.end(calendar.toString())
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    payload.logger.error(message)
    res.json({ error: message })
  }
}
