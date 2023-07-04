"use client";
import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "@/constants";
import { IUser, IUsersGetTypes } from "@/interfaces";

// GET USERS
export const getUsersRequest = (
  search: string,
  limit: string | number,
  skip: string | number
): Promise<IUsersGetTypes> => {
  return fetch(
    `${BASE_URL}/search?q=${search}&limit=${limit}&skip=${skip}`
  ).then((response) => response.json());
};

export const getUsersQuery = (
  search: string,
  limit: string | number,
  skip: string | number
) =>
  useQuery({
    queryKey: ["users"],
    queryFn: () => getUsersRequest(search, limit, skip),
    enabled: false,
  });

//DELETE USER
export const deleteUserRequest = (id: string): Promise<IUser> => {
  return fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  }).then((response) => response.json());
};

//UPDATE USER
export const updateUserRequest = ({
  id,
  firstName,
  lastName,
  email,
  phone,
  domain,
  companyName,
}: {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  domain: string;
  companyName: string;
}): Promise<IUser> => {
  return fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      firstName,
      lastName,
      email,
      domain,
      phone,
      company: { name: companyName },
    }),
  }).then((response) => response.json());
};

//CREATE USER
export const createUserRequest = ({
  firstName,
  lastName,
  email,
  phone,
  domain,
  companyName,
}: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  domain: string;
  companyName: string;
}): Promise<IUser> => {
  return fetch(`${BASE_URL}/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      firstName,
      lastName,
      email,
      domain,
      phone,
      company: { name: companyName },
      image: "https://robohash.org/hicveldicta.png",
    }),
  }).then((response) => response.json());
};
