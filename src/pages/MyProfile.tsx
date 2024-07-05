import PageHeader from "@/components/PageHeader";
import { Input } from "@/components/ui/input";
import {
  useGetUserDetails,
  useUpdateUser,
} from "@/lib/react-query/QueriesAndMutations";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const MyProfile = () => {
  const navigate = useNavigate();
  const {
    data: currentUser,
    isPending,
    isError: getUserError,
  } = useGetUserDetails();

  const { mutateAsync: updateUser } = useUpdateUser();
  const [formData, setFormData] = useState(currentUser);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  if (getUserError) {
    navigate("/");
    toast.error("Error getting user details, try again", { theme: "colored" });
    return;
  }
  if (isPending)
    return (
      <div className="flex min-h-96 items-center justify-center">Loading</div>
    );
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const res = await updateUser(formData);
    if (!res) {
      toast.error("Error updating user");
      return;
    }
    if (res.success === false) {
      toast.error(res.message, { theme: "colored" });
      return;
    }

    setFormData(res.data);
    toast.success("User Updated");
  };

  return (
    <>
      <PageHeader pageName="Edit Profile" />
      <div className="container my-10 flex min-h-96 flex-col gap-5">
        <h2 className="text-4xl font-semibold">Profile Details</h2>
        <form className="mx-auto w-2/3 lg:w-1/4" onSubmit={handleSubmit}>
          <p>First Name</p>
          <Input
            onChange={handleChange}
            type="text"
            placeholder={currentUser.firstName}
            id="firstName"
          />
          <p>Last Name</p>
          <Input
            onChange={handleChange}
            type="text"
            placeholder={currentUser.lastName}
            id="lastName"
          />
          <p>Email</p>
          <Input
            onChange={handleChange}
            type="email"
            placeholder={currentUser.email}
            id="email"
          />
          <p>Phone Number</p>
          <Input
            onChange={handleChange}
            type="tel"
            placeholder={currentUser.phoneNumber}
            id="phone"
          />
          <p>Password</p>
          <Input
            onChange={handleChange}
            type="password"
            placeholder={currentUser.password}
            id="password"
          />
          <button
            type="submit"
            className="mx-auto mt-8 rounded-lg bg-sandDark px-8 py-3 text-white md:w-2/3"
          >
            Update Profile
          </button>
        </form>
      </div>
    </>
  );
};

export default MyProfile;
