import { useCustomParams } from "@/utils";
import styles from "./styles.module.scss";
import Button from "@/components/Button";
import Modal from "..";
import { useMutation } from "@tanstack/react-query";
import { updateUserRequest } from "@/services";
import Label from "@/components/Label";
import Input from "@/components/Input";
import { useState } from "react";
import { IUser } from "@/interfaces";
type Props = {
  refetch: Function;
  users: IUser[] | undefined;
};
const EditUserModal: React.FC<Props> = ({ refetch, users }) => {
  const { searchParams, updateSearchParams } = useCustomParams();

  const id = searchParams.get("id") || "";
  const updateRequest = useMutation(updateUserRequest, {
    onSuccess: () => {
      refetch();
      updateSearchParams({
        action: "",
        id: "",
      });
    },
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateRequest.mutate({
      id,
      firstName,
      lastName,
      email,
      phone,
      domain,
      companyName,
    });
  };

  const selectedUser = users?.find((item) => item.id.toString() === id);

  const [firstName, setFirstName] = useState(selectedUser?.firstName || "");
  const [lastName, setLastName] = useState(selectedUser?.lastName || "");
  const [email, setEmail] = useState(selectedUser?.email || "");
  const [phone, setPhone] = useState(selectedUser?.phone || "");
  const [domain, setDomain] = useState(selectedUser?.domain || "");
  const [companyName, setCompanyName] = useState(
    selectedUser?.company.name || ""
  );

  return (
    <Modal title={"Edit User"}>
      <div className={styles.card}>
        <form onSubmit={onSubmit}>
          <div className={styles.inputWrapper}>
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              type="text"
              placeholder="First Name"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className={styles.inputWrapper}>
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              type="text"
              required
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className={styles.inputWrapper}>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              required
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.inputWrapper}>
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              type="text"
              required
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className={styles.inputWrapper}>
            <Label htmlFor="domain">Website</Label>
            <Input
              id="domain"
              type="text"
              required
              placeholder="Website"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
            />
          </div>
          <div className={styles.inputWrapper}>
            <Label htmlFor="companyName">Company Name</Label>
            <Input
              id="companyName"
              type="text"
              required
              placeholder="Company Name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>
          <Button
            type="submit"
            style={{ marginTop: "10px" }}
            disabled={updateRequest.isLoading}>
            SAVE
          </Button>
        </form>
      </div>
    </Modal>
  );
};

export default EditUserModal;
