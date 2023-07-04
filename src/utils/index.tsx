import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function useCustomParams() {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const updateSearchParams = (params: Object) => {
    const currentSearchParams = new URLSearchParams(
      Array.from(searchParams.entries())
    );

    Object.entries(params).forEach(([key, value]) => {
      if (value) {
        currentSearchParams.set(key, String(value));
      } else {
        currentSearchParams.delete(key);
      }
    });

    router.replace(`${pathName}?${currentSearchParams.toString()}`);
  };

  return {
    searchParams,
    updateSearchParams,
  };
}
