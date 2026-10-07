import acFilterService from '@/assets/photos/ac-filter-service.jpg'
import apartmentBuilding from '@/assets/photos/apartment-building.jpg'
import blueprintPlanning from '@/assets/photos/blueprint-planning.jpg'
import busyKitchen from '@/assets/photos/busy-kitchen.jpg'
import chefManager from '@/assets/photos/chef-manager.jpg'
import cityTowers from '@/assets/photos/city-towers.jpg'
import cleanerCorridor from '@/assets/photos/cleaner-corridor.jpg'
import colleaguesTablets from '@/assets/photos/colleagues-tablets.jpg'
import dataCenter from '@/assets/photos/data-center.jpg'
import electricianPanel from '@/assets/photos/electrician-panel.jpg'
import engineersRooftop from '@/assets/photos/engineers-rooftop.jpg'
import factoryTechnician from '@/assets/photos/factory-technician.jpg'
import fleetInspection from '@/assets/photos/fleet-inspection.jpg'
import fleetManager from '@/assets/photos/fleet-manager.jpg'
import fleetVans from '@/assets/photos/fleet-vans.jpg'
import hotelHousekeeping from '@/assets/photos/hotel-housekeeping.jpg'
import hotelReception from '@/assets/photos/hotel-reception.jpg'
import hvacTechnicians from '@/assets/photos/hvac-technicians.jpg'
import inspectionClipboard from '@/assets/photos/inspection-clipboard.jpg'
import liftShaft from '@/assets/photos/lift-shaft.jpg'
import liftTechnician from '@/assets/photos/lift-technician.jpg'
import mallAtrium from '@/assets/photos/mall-atrium.jpg'
import officeCollaboration from '@/assets/photos/office-collaboration.jpg'
import officeCorridor from '@/assets/photos/office-corridor.jpg'
import officeFloor from '@/assets/photos/office-floor.jpg'
import officeTeam from '@/assets/photos/office-team.jpg'
import partnerMeeting from '@/assets/photos/partner-meeting.jpg'
import plantManagers from '@/assets/photos/plant-managers.jpg'
import plumberRepair from '@/assets/photos/plumber-repair.jpg'
import propertyManager from '@/assets/photos/property-manager.jpg'
import rooftopUnits from '@/assets/photos/rooftop-units.jpg'
import stockCheck from '@/assets/photos/stock-check.jpg'
import supportAgent from '@/assets/photos/support-agent.jpg'
import teamWorkshop from '@/assets/photos/team-workshop.jpg'
import technicianDrill from '@/assets/photos/technician-drill.jpg'
import technicianPlantRoom from '@/assets/photos/technician-plant-room.jpg'
import techniciansPanel from '@/assets/photos/technicians-panel.jpg'
import vanDriver from '@/assets/photos/van-driver.jpg'
import warehouseAnalytics from '@/assets/photos/warehouse-analytics.jpg'
import warehouseTeam from '@/assets/photos/warehouse-team.jpg'
import welcomeHandshake from '@/assets/photos/welcome-handshake.jpg'

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
  dataCenter,
  electricianPanel,
  engineersRooftop,
  factoryTechnician,
  fleetInspection,
  fleetManager,
  fleetVans,
  hotelHousekeeping,
  hotelReception,
  hvacTechnicians,
  inspectionClipboard,
  liftShaft,
  liftTechnician,
  mallAtrium,
  officeCollaboration,
  officeCorridor,
  officeFloor,
  officeTeam,
  partnerMeeting,
  plantManagers,
  plumberRepair,
  propertyManager,
  rooftopUnits,
  stockCheck,
  supportAgent,
  teamWorkshop,
  technicianDrill,
  technicianPlantRoom,
  techniciansPanel,
  vanDriver,
  warehouseAnalytics,
  warehouseTeam,
  welcomeHandshake,
}

export type PhotoId = keyof typeof photos

export type Photo = { id: PhotoId; alt: string }
