export const schoolsColumns = [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "name",
      header: "School Name",
    },
    {
      accessorKey: "branches",
      header: "Branches",
    },
    {
      accessorKey: "students",
      header: "Total Students",
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ getValue }) => {
        const status = getValue();
        return (
          <span
            className={`px-2 py-1 rounded text-white text-sm ${
              status === "Active" ? "bg-green-500" : "bg-yellow-500"
            }`}
          >
            {status}
          </span>
        );
      },
    },
  ];
  