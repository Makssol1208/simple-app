"use client";

export default function ErrorWrapper({ error }:any ) {
  return <h1>Oops!!! {error.message}</h1>;
}
