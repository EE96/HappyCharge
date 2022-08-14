import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import Client from '../../Client/client'

type Props = {
    chargeDeviceId: string,
    connectorId: string
}

type Inputs = {
    content: 'string'
}

export default function ReportContent({ chargeDeviceId, connectorId }: Props) {

    const client = new Client()

    const { register, handleSubmit } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = ({ content }) => client.makeReport
    (
        {
            content,
            chargeDeviceId,
            connectorId
        }
    )

    return (
        <div className="reporttext">
            <form onSubmit={handleSubmit(onSubmit)}>
                <textarea {...register('content')} />
                <input type='submit' />
            </form>
        </div>
    )
}