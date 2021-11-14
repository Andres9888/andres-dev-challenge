import React from "react"
import { render, waitFor, screen, within } from "@testing-library/react"
import Table from "./App"

describe("Table", () => {
  it("Table renders with headers", async () => {
    render(<Table />)
    await waitFor(() => screen.getByRole("table"))
    const uuidHeader = screen.getByText(/Uuid/g)
    expect(uuidHeader).toBeInTheDocument()
    const nameHeader = screen.getByText(/Name/g)
    expect(nameHeader).toBeInTheDocument()
    const emailHeader = screen.getByText(/Email/g)
    expect(emailHeader).toBeInTheDocument()
    const requestedAmountHeader = screen.getByText(/Requested Amount/g)
    expect(requestedAmountHeader).toBeInTheDocument()
    const paymentAmountHeader = screen.getByText(/Payment Amount/g)
    expect(paymentAmountHeader).toBeInTheDocument()
    const paymentMethodHeader = screen.getByText(/Payment Method/g)
    expect(paymentMethodHeader).toBeInTheDocument()
    const initiatePaymentHeader = screen.getByText(/Initiate Payment/g)
    expect(initiatePaymentHeader).toBeInTheDocument()
  })

  it("Does not Show Pay Button if user has no application", async () => {
    render(<Table />)
    await waitFor(() => screen.getByRole("table"))
    const idWithOutApplication = "4e059bd8-2d93-41e9-9305-e9922f945e5f"
    const row = screen.getByText(idWithOutApplication).closest("tr")
    const utils = within(row)

    expect(utils.queryByText("Pay")).not.toBeInTheDocument()
  })

  it("Does not Show Pay Button if user has application and was payed", async () => {
    render(<Table />)
    await waitFor(() => screen.getByRole("table"))
    const idWithPaidApplication = "a2ee3f67-2c01-4f9c-be0f-ff3b98474173"
    const row = screen.getByText(idWithPaidApplication).closest("tr")
    const utils = within(row)

    expect(utils.queryByText("Pay")).not.toBeInTheDocument()
  })

  it("Shows Pay Button if user has no application", async () => {
    render(<Table />)
    await waitFor(() => screen.getByRole("table"))
    const idWithApplication = "ca456b9f-cd7c-414f-85f8-99534cfa4356"
    const row = screen.getByText(idWithApplication).closest("tr")
    const utils = within(row)

    expect(utils.queryByText("Pay")).toBeInTheDocument()
  })
})
