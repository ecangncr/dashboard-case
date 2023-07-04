"use client";
import Table from "@/components/Table";
import { useGetUsersQuery } from "@/services";
import { useCustomParams } from "@/utils";
import { useEffect } from "react";
import { debounce } from "lodash";

export default function Students() {
  const { searchParams, updateSearchParams } = useCustomParams();
  const search = searchParams.get("search") || "";
  const limit = searchParams.get("limit") || 6;
  const page = Number(searchParams.get("page")) || 1;

  const { data, refetch, isFetching } = useGetUsersQuery(
    search,
    limit,
    Number(page - 1) * Number(limit)
  );
  useEffect(() => {
    debouncedRefetch();
  }, [search, limit, page]);

  const debouncedRefetch = debounce(() => {
    refetch();
  }, 1000);

  return <Table refetch={refetch} data={isFetching ? undefined : data} />;
}
