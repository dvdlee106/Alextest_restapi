import { Request, Response, NextFunction } from "express";
import axios, { AxiosResponse } from "axios";

const vinApiUri = "https://vpic.nhtsa.dot.gov/api/vehicles/decodevinextended";
let vehicleInfos: any[];

const decodeVin = async (vin: string): Promise<any> => {
  const vehicle: AxiosResponse = await axios.get(`${vinApiUri}/${vin}?format=json`);
  vehicleInfos = vehicle.data.Results;
  return vehicle;
};

const getSpecificInfo = (variables: string[]): any => {
  const values: any = {};
  vehicleInfos.map((vehicleInfo: any) => {
    if (variables.includes(vehicleInfo.Variable)) {
      values[`${vehicleInfo.Variable}`] = vehicleInfo.Value;
    }
  });
  return values;
};

const hi = async (req: Request, res: Response, next: NextFunction) => {
  console.log(req.body);
  next();
};

export const VinUtil = { decodeVin, getSpecificInfo, hi };
