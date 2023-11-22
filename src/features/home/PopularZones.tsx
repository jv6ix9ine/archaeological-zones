import Badge from '@/src/common/Badge'

const PopularZones = () => {

  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-xs md:max-w-md">
    <h1 className="text-xl">Más populares:</h1>
    <div className="flex gap-4 justify-evenly items-center w-full">
        <Badge title="Chichen Itza" zoneId='655e4b7eb0a6b9638ecc7539'/>
        <Badge title="Tulum" zoneId='655e66aec7cf41e68e91d7f3'/>
        <Badge title="Teotihuacán" zoneId='655e6ac1c7cf41e68e91df28' />
    </div>
</div>
  )
}

export default PopularZones