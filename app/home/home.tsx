import { v4 as uuidv4 } from "uuid"
import Link from "next/link"

const Home = () => {
  interface Task {
    id: string
    title: string
    startTime: string
    endTime: string
    date: Date
    isDone: boolean
    description: string
    dayOfWeek: string
  }

  let tasks: Array<object> = []

  const wantWekends = false
  const isDescription = false

  //new task
  const description = ""
  const title = ""
  const startTime = ""
  const endTime = ""
  const date = new Date()

  //create task
  const createTask = (e) => {
    e.preventDefault()

    // create a random ID
    const uniqueId = uuidv4()

    tasks = [
      ...tasks,
      {
        id: uniqueId,
        title: title,
        startTime: startTime,
        endTime: endTime,
        date: date,
        isDone: false,
        description: description,
        dayOfWeek: "Mon",
      },
    ]
  }

  // function to modify task ( dynamic day)
  const modifyTask = () => {}
  // use .filter to select the task

  function getCurrentWeekNumber() {
    const today: Date = new Date()
    const yearStart: Date = new Date(today.getFullYear(), 0, 1)
    const dayOfWeek = today.getDay()

    // Calculate the week number
    const weekNumber = Math.ceil(((today - yearStart) / 86400000 + 1 + (dayOfWeek - 1)) / 7)
    return weekNumber
  }

  return (
    <>
      {/* separate navbar in other component */}
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link href="#home">TO DO lists</Link>
          <Link href="#link">Full calendar</Link>
        </div>
        <div className="flex-none">
          <button className="btn btn-square btn-ghost" onClick={() => setWantWekends(!wantWekends)}>
            Weekends On/Off
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <div>
        {/* <Row> */}
        <h3>Weekly Planner</h3>
        <h4>Week nº {getCurrentWeekNumber()}</h4>
        {/* </Row> */}
      </div>

      <div>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title className="bg-success">Monday - monthDay </Card.Title>
              {/*  / task.date, cant be cause it dont know WHICH task */}

              <div>
                {/* sort by start time */}
                {tasks &&
                  tasks.map((task) => {
                    return (
                      <div key={task.id}>
                        {task.dayOfWeek === "Mon" && (
                          <div>
                            <p>
                              <b className="pointer" onClick={() => setIsDescription(!isDescription)}>
                                {task.title}
                              </b>
                            </p>
                            {isDescription && <p>{task.description}</p>}
                          </div>
                        )}
                      </div>
                    )
                  })}
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title className="bg-success">Tuesday - task.date</Card.Title>

              {/* this body will be filled by a map and a state([]) */}
              <div>
                <input type="checkbox" name="dynStateName" id="dynStateID" />
                <label htmlFor="dynStateName">task</label>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title className="bg-success">Wednesday - task.date</Card.Title>

              {/* this body will be filled by a map and a state([]) */}
              <div>
                <input type="checkbox" name="dynStateName" id="dynStateID" />
                <label htmlFor="dynStateName">task</label>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title className="bg-success">Thursday - task.date</Card.Title>

              {/* this body will be filled by a map and a state([]) */}
              <div>
                <input type="checkbox" name="dynStateName" id="dynStateID" />
                <label htmlFor="dynStateName">task</label>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title className="bg-success">Friday - task.date</Card.Title>

              {/* this body will be filled by a map and a state([]) */}
              <div>
                <input type="checkbox" name="dynStateName" id="dynStateID" />
                <label htmlFor="dynStateName">task</label>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {wantWekends && (
          <>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title className="bg-success">Saturday - task.date</Card.Title>

                  {/* this body will be filled by a map and a state([]) */}
                  <div>
                    <input type="checkbox" name="dynStateName" id="dynStateID" />
                    <label htmlFor="dynStateName">task</label>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title className="bg-success">Sunday - task.date</Card.Title>

                  {/* this body will be filled by a map and a state([]) */}
                  <div>
                    <input type="checkbox" name="dynStateName" id="dynStateID" />
                    <label htmlFor="dynStateName">task</label>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </>
        )}
      </div>

      {/* task creator form */}
      <Container>
        <Form className="mt-5" onSubmit={(e) => createTask(e)}>
          <Form.Control type="text" placeholder="Task title" required onChange={(e) => setTitle(e.target.value)} />

          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Date</Form.Label>
            <input type="date" name="" id="" value={date} onChange={(e) => setDate(e.target.value)} />
            <Form.Label>Start time</Form.Label>
            <input type="time" name="" id="" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
            <Form.Label>Finish time</Form.Label>
            <input type="time" name="" id="" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} value={description} onChange={(e) => setDescription(e.target.value)} />
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    </>
  )
}

export default Home
