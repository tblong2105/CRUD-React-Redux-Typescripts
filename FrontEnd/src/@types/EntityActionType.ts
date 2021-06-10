import * as types from "../actions/Types";
import { IBrand } from "./Ibrand";
import { Iproduct } from "./IProduct";
import { IUser } from "./IUser";

/**
 * Entity Action Type
 *
 * Version 1.0
 *
 * Date: 08-06-2021
 *
 * Copyright 
 *
 * Modification Logs:
 * DATE               AUTHOR          DESCRIPTION
 * -----------------------------------------------------------------------
 * 08-06-2021         LONGTB4           Create
 */


/**
 * retrieveProductsAction interface
 * 
 */
export interface retrieveProductsAction {
  type: typeof types.RETRIEVE_PRODUCTS;
  payload: Iproduct[];
}

/**
 * createProductAction interface
 * 
 */
export interface createProductAction {
  type: typeof types.CREATE_PRODUCT;
  payload: Iproduct;
}

/**
 * updateProductsAction interface
 * 
 */
export interface updateProductsAction {
  type: typeof types.UPDATE_PRODUCT;
  payload: Iproduct;
}

/**
 * deleteProductsAction interface
 * 
 */
export interface deleteProductsAction {
  type: typeof types.DELETE_PRODUCT;
  payload: number;
}

/**
 * retrieveBrandsAction interface
 * 
 */
export interface retrieveBrandsAction {
  type: typeof types.RETRIEVE_BRANDS;
  payload: IBrand[];
}

/**
 * createBrandAction interface
 * 
 */
export interface createBrandAction {
  type: typeof types.CREATE_BRAND;
  payload: IBrand;
}

/**
 * updateBrandsAction interface
 * 
 */
export interface updateBrandsAction {
  type: typeof types.UPDATE_BRAND;
  payload: IBrand;
}

/**
 * deleteBrandsAction interface
 * 
 */
export interface deleteBrandsAction {
  type: typeof types.DELETE_BRAND;
  payload: number;
}

/**
 * retrieveUsersAction interface
 * 
 */
export interface retrieveUsersAction {
  type: typeof types.RETRIEVE_USERS;
  payload: IUser[];
}

/**
 * updateUsersAction interface
 * 
 */
export interface updateUsersAction {
  type: typeof types.UPDATE_USER;
  payload: IUser;
}

/**
 * deleteUserAction interface
 * 
 */
export interface deleteUserAction {
  type: typeof types.DELETE_USER;
  payload: number;
}

/**
 * updateProfileUserAction interface
 * 
 */
export interface updateProfileUserAction {
  type: typeof types.UPDATEPROFILE_USER;
  payload: IUser;
}

/**
 * loginAction interface
 * 
 */
export interface loginAction {
  type: typeof types.LOGIN_SUCCESS;
  payload: {};
}

/**
 * ActionType interface
 * 
 */
export type ActionType =
  | retrieveProductsAction
  | createProductAction
  | updateProductsAction
  | deleteProductsAction

  | retrieveBrandsAction
  | createBrandAction
  | updateBrandsAction
  | deleteBrandsAction

  | retrieveUsersAction
  | updateUsersAction
  | deleteUserAction
  | updateProfileUserAction

  | loginAction
export type ActionEntity = ActionType;