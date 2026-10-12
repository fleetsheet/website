import acFilterService from '@/assets/photos/ac-filter-service.jpg'
import apartmentBuilding from '@/assets/photos/apartment-building.jpg'
import blueprintPlanning from '@/assets/photos/blueprint-planning.jpg'
import busyKitchen from '@/assets/photos/busy-kitchen.jpg'
import chefManager from '@/assets/photos/chef-manager.jpg'
import cityTowers from '@/assets/photos/city-towers.jpg'
import cleanerCorridor from '@/assets/photos/cleaner-corridor.jpg'
import colleaguesTablets from '@/assets/photos/colleagues-tablets.jpg'
import containerPort from '@/assets/photos/container-port.jpg'
import dataCenter from '@/assets/photos/data-center.jpg'
import electricianPanel from '@/assets/photos/electrician-panel.jpg'
import engineersRooftop from '@/assets/photos/engineers-rooftop.jpg'
import factoryTechnician from '@/assets/photos/factory-technician.jpg'
import fleetInspection from '@/assets/photos/fleet-inspection.jpg'
import fleetManager from '@/assets/photos/fleet-manager.jpg'
import fleetVans from '@/assets/photos/fleet-vans.jpg'
import gymFloor from '@/assets/photos/gym-floor.jpg'
import hotelHousekeeping from '@/assets/photos/hotel-housekeeping.jpg'
import hotelReception from '@/assets/photos/hotel-reception.jpg'
import hvacTechnicians from '@/assets/photos/hvac-technicians.jpg'
import inspectionClipboard from '@/assets/photos/inspection-clipboard.jpg'
import liftShaft from '@/assets/photos/lift-shaft.jpg'
import liftTechnician from '@/assets/photos/lift-technician.jpg'
import mallAtrium from '@/assets/photos/mall-atrium.jpg'
import mallSkylight from '@/assets/photos/mall-skylight.jpg'
import mepModel from '@/assets/photos/mep-model.jpg'
import officeCollaboration from '@/assets/photos/office-collaboration.jpg'
import officeCorridor from '@/assets/photos/office-corridor.jpg'
import officeFloor from '@/assets/photos/office-floor.jpg'
import officeTeam from '@/assets/photos/office-team.jpg'
import operatingTheatre from '@/assets/photos/operating-theatre.jpg'
import partnerMeeting from '@/assets/photos/partner-meeting.jpg'
import plantManagers from '@/assets/photos/plant-managers.jpg'
import plumberRepair from '@/assets/photos/plumber-repair.jpg'
import propertyManager from '@/assets/photos/property-manager.jpg'
import robotAssemblyLine from '@/assets/photos/robot-assembly-line.jpg'
import rooftopCondensers from '@/assets/photos/rooftop-condensers.jpg'
import rooftopUnits from '@/assets/photos/rooftop-units.jpg'
import serverRacks from '@/assets/photos/server-racks.jpg'
import solarRooftop from '@/assets/photos/solar-rooftop.jpg'
import steelCoilAisle from '@/assets/photos/steel-coil-aisle.jpg'
import stockCheck from '@/assets/photos/stock-check.jpg'
import supportAgent from '@/assets/photos/support-agent.jpg'
import teamWorkshop from '@/assets/photos/team-workshop.jpg'
import technicianDrill from '@/assets/photos/technician-drill.jpg'
import technicianPlantRoom from '@/assets/photos/technician-plant-room.jpg'
import techniciansPanel from '@/assets/photos/technicians-panel.jpg'
import towerFacadeNight from '@/assets/photos/tower-facade-night.jpg'
import vanDriver from '@/assets/photos/van-driver.jpg'
import vanFleetParking from '@/assets/photos/van-fleet-parking.jpg'
import warehouseAnalytics from '@/assets/photos/warehouse-analytics.jpg'
import warehouseTeam from '@/assets/photos/warehouse-team.jpg'
import welcomeHandshake from '@/assets/photos/welcome-handshake.jpg'
import wokKitchen from '@/assets/photos/wok-kitchen.jpg'

/** Editorial photos from the Fleet photo library, referenced by id from page data. */
export const photos = {
  acFilterService,
  apartmentBuilding,
  blueprintPlanning,
  busyKitchen,
  chefManager,
  cityTowers,
  cleanerCorridor,
  colleaguesTablets,
  containerPort,
  dataCenter,
  electricianPanel,
  engineersRooftop,
  factoryTechnician,
  fleetInspection,
  fleetManager,
  fleetVans,
  gymFloor,
  hotelHousekeeping,
  hotelReception,
  hvacTechnicians,
  inspectionClipboard,
  liftShaft,
  liftTechnician,
  mallAtrium,
  mallSkylight,
  mepModel,
  officeCollaboration,
  officeCorridor,
  officeFloor,
  officeTeam,
  operatingTheatre,
  partnerMeeting,
  plantManagers,
  plumberRepair,
  propertyManager,
  robotAssemblyLine,
  rooftopCondensers,
  rooftopUnits,
  serverRacks,
  solarRooftop,
  steelCoilAisle,
  stockCheck,
  supportAgent,
  teamWorkshop,
  technicianDrill,
  technicianPlantRoom,
  techniciansPanel,
  towerFacadeNight,
  vanDriver,
  vanFleetParking,
  warehouseAnalytics,
  warehouseTeam,
  welcomeHandshake,
  wokKitchen,
}

export type PhotoId = keyof typeof photos

export type Photo = { id: PhotoId; alt: string }
