import React, { useState as useStateMock } from "react"
import { render, waitFor, screen } from "@testing-library/react"
import App from "./App"

// test("table renders with headers", async () => {
//   render(<App />)
//   await waitFor(() => screen.getByRole("table"))
//   const uuidHeader = screen.getByText(/Uuid/g)
//   expect(uuidHeader).toBeInTheDocument()
//   const nameHeader = screen.getByText(/Name/g)
//   expect(nameHeader).toBeInTheDocument()
//   const emailHeader = screen.getByText(/Email/g)
//   expect(emailHeader).toBeInTheDocument()
//   const requestedAmountHeader = screen.getByText(/Requested Amount/g)
//   expect(requestedAmountHeader).toBeInTheDocument()
//   const paymentAmountHeader = screen.getByText(/Payment Amount/g)
//   expect(paymentAmountHeader).toBeInTheDocument()
//   const paymentMethodHeader = screen.getByText(/Payment Method/g)
//   expect(paymentMethodHeader).toBeInTheDocument()
//   const initiatePaymentHeader = screen.getByText(/Initiate Payment/g)
//   expect(initiatePaymentHeader).toBeInTheDocument()
// })

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}))

test("useState mock", async () => {
  const users = [
    {
      uuid: "a2ee3f67-2c01-4f9c-be0f-ff3b98474173",
      name: "Astrid Gillan",
      email: "agillan0@acquirethisname.com",
    },
  ]
  const applications = [
    {
      uuid: "7db92fc0-5101-4611-a684-5a5745c84cc3",
      userUuid: "a2ee3f67-2c01-4f9c-be0f-ff3b98474173",
      requestedAmount: 35943,
    },
  ]

  const payments = [
    {
      uuid: "8722073f-6520-44b7-a6ab-f04de644324d",
      applicationUuid: "01b35179-134c-4bb1-af36-a9663c009fcd",
      paymentMethod: "ACH",
      paymentAmount: 44798,
    },
  ]
  const dataLoaded = false

  React.useState = jest
    .fn()
    .mockReturnValueOnce([users, {}])
    .mockReturnValueOnce([applications, {}])
    .mockReturnValueOnce([payments, {}])
    .mockReturnValueOnce([dataLoaded, true])

  const { debug } = render(<App />)
  const table = await waitFor(() => screen.getByRole("table"))
  debug(table)
})

// test("useState mock2", async () => {
//   const { debug } = render(<App />)
//   const table = await waitFor(() => screen.getByRole("table"))
//   debug(table)
// })
