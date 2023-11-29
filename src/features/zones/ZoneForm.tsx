'use client'
import { IState } from "@/src/interfaces/state"
import { DEFAULT_ZONE, IZone, IZoneForm } from "@/src/interfaces/zone"
import StateController from "@/src/server/controller/state"
import StateService from "@/src/services/states"
import ZoneService from "@/src/services/zones"
import { useRouter } from "next/navigation"
import { FocusEventHandler, useEffect, useState } from "react"
import { Controller, Noop, useForm } from "react-hook-form"

type Props = {
    zone?: IZone
}

const ZoneForm = ({ zone }: Props) => {
    const router = useRouter()
    const [states, setStates] = useState<IState[]>()
    const {
        handleSubmit,
        formState: { errors },
        control,
        reset,
        getValues,
        setValue,
    } = useForm<IZoneForm>({
        defaultValues: zone ?
            {
                ...zone,
                state: (zone.state as unknown as IState)._id,
                imageUrl1: zone.images ? zone.images[0].url : "",
                imageUrl2: zone.images ? zone.images[1].url : "",
                imageUrl3: zone.images ? zone.images[2].url : ""
            } :
            {
                ...DEFAULT_ZONE
            }
    })

    useEffect(() => {
        StateService.getAll().then((response) => {
            if (response.success) {
                setStates(response.data)
                router.refresh()
            }
        })
    }, [router])

    function handleForm(formData: IZoneForm) {
        const images = [
            { url: String(formData.imageUrl1) },
            { url: String(formData.imageUrl2) },
            { url: String(formData.imageUrl3) },
        ]
        const payload: IZone = {
            choords: formData.choords,
            description: formData.description,
            location: formData.location,
            name: formData.name,
            schedules: formData.schedules,
            state: formData.state,
            mainImageUrl: String(formData.mainImageUrl),
            images: images
        }
        if (zone) {
            return ZoneService.updateZone(String(zone._id), payload).then((response) => {
                if (response.success) {
                    alert(response.message)
                    router.refresh()
                }
            })
        }
        ZoneService.createZone(payload).then((response) => {
            if (response.success) {
                alert(response.message)
                reset()
                router.refresh()
            }
        })
    }

    return (
        <div className="py-6 px-4" onSubmit={handleSubmit(handleForm)}>
            <h1 className="mb-4">Ingresar zona arqueologica</h1>
            <form className="flex flex-col gap-4" autoComplete="false">

                <Controller
                    control={control}
                    name="name"
                    rules={{ required: true }}
                    render={({ field }) => (
                        <input
                            className="h-12 p-2"
                            type="text"
                            placeholder="Name"
                            value={field.value}
                            onChange={field.onChange}
                        />
                    )}
                />
                
                <Controller
                    control={control}
                    name="state"
                    rules={{ required: "Elije un Estado" }}
                    render={({ field }) => (
                        <select
                            className="h-12 p-2"
                            value={field.value}
                            onChange={field.onChange}
                        >
                            <option value={""}>
                                {"Seleccionar"}
                            </option>
                            {
                                states?.map((state) => (
                                    <option key={state._id} value={state._id}>
                                        {state.name}
                                    </option>
                                ))
                            }
                        </select>
                    )}
                />
                {errors.state && <span className="text-red-500 text-sm">{errors.state.message}</span>}

                <div className="grid grid-cols-2 gap-3">
                    <Controller
                        control={control}
                        name="choords.latitude"
                        rules={{ required: true }}
                        render={({ field }) => (
                            <input
                                className="h-12 p-2"
                                type="number"
                                placeholder="Latitude"
                                value={field.value === 0 ? "" : field.value}
                                onChange={field.onChange}
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name="choords.longitude"
                        rules={{ required: true }}
                        render={({ field }) => (
                            <input
                                className="h-12 p-2"
                                type="number"
                                placeholder="Longitude"
                                value={field.value === 0 ? "" : field.value}
                                onChange={field.onChange}
                            />
                        )}
                    />
                </div>

                <Controller
                    control={control}
                    name="description"
                    rules={{ required: true }}
                    render={({ field }) => (
                        <textarea
                            rows={6}
                            className="p-2"
                            placeholder="Description..."
                            value={field.value}
                            onChange={field.onChange}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="location"
                    rules={{ required: true }}
                    render={({ field }) => (
                        <textarea
                            rows={3}
                            className="p-2"
                            placeholder="Location"
                            value={field.value}
                            onChange={field.onChange}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="schedules"
                    rules={{ required: true }}
                    render={({ field }) => (
                        <textarea
                            className="h-12 p-2"
                            placeholder="Schedules"
                            value={field.value}
                            onChange={field.onChange}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="mainImageUrl"
                    rules={{ required: true }}
                    render={({ field }) => (
                        <input
                            className="h-12 p-2"
                            type="text"
                            placeholder="Main image URL"
                            value={field.value}
                            onChange={field.onChange}
                        />
                    )}
                />

                <Controller
                    control={control}
                    name="imageUrl1"
                    rules={{ required: true }}
                    render={({ field }) => (
                        <input
                            className="h-12 p-2"
                            type="text"
                            placeholder="Image 1 URL"
                            value={field.value}
                            onChange={field.onChange}
                        />
                    )}
                />

                <Controller
                    control={control}
                    name="imageUrl2"
                    rules={{ required: true }}
                    render={({ field }) => (
                        <input
                            className="h-12 p-2"
                            type="text"
                            placeholder="Image 2 URL"
                            value={field.value}
                            onChange={field.onChange}
                        />
                    )}
                />

                <Controller
                    control={control}
                    name="imageUrl3"
                    rules={{ required: true }}
                    render={({ field }) => (
                        <input
                            className="h-12 p-2"
                            type="text"
                            placeholder="Image 3 URL"
                            value={field.value}
                            onChange={field.onChange}
                        />
                    )}
                />

                <div className="w-full">
                    {
                        zone ?
                            <button className="bg-neutral-500 w-48 h-12 p-2" type="submit">Save</button>
                            :
                            <button className="bg-neutral-500 w-48 h-12 p-2" type="submit">Create</button>
                    }
                </div>
            </form>
        </div>
    )
}

export default ZoneForm