import Badge from '@/src/common/Badge'

const PopularZones = () => {

  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-xs md:max-w-md">
    <h1 className="text-xl">Más populares:</h1>
    <div className="flex gap-4 justify-evenly items-center w-full">
        <Badge title="Chichen Itza" zoneId='655e4b7eb0a6b9638ecc7539'/>
        <Badge title="Tulum" />
        <Badge title="Calakmul" />
    </div>
</div>
  )
}

export default PopularZones