import { ChangeEvent, useEffect, useRef, useState } from "react"

export function useFilter<T>(data: T[]) {
    const [searchText, setSearchText] = useState('');
    const [filteredData, setFilteredData] = useState(data);
    const dataRef = useRef(data);

    const filterByProperty = (filterValue: string) => {
        if (filterValue === '' || filterValue === 'Todos' || filterValue === 'All') {
            setFilteredData(dataRef.current)
        } 
        else {
            const filtered = dataRef.current.filter((object: T) =>
                Object.values(object as {}).some(
                    (value) => {
                        return typeof value === 'string' && value.toLowerCase().includes(filterValue.toLowerCase())
            }))
            setFilteredData(filtered)
        }
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target
        setSearchText(value.trim())
    }

    useEffect(() => {
        const filtered = dataRef.current?.filter((object: T) =>
            Object.values(object as {}).some((value) => {
                    return typeof value === 'string' && value.toLowerCase().includes(searchText.toLowerCase())
        }));
        setFilteredData(filtered);
    }, [searchText]);

    return { handleChange, filterByProperty, filteredData }
}