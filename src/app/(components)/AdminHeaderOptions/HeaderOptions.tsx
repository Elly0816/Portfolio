import HeaderLink from "../Header/Button";

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

const AdminHeader: React.FC = () => {
    return (
        <>
            <HeaderLink
                classNames={classNames}
                initialItem={{
                    name: "Dashboard",
                    href: "/admin/dashboard",
                    current: false,
                }}
            />
            <HeaderLink
                classNames={classNames}
                initialItem={{
                    name: "Profile",
                    href: "/admin/profile",
                    current: false,
                }}
            />
        </>
    );
};

export default AdminHeader;
