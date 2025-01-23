import React, { FC } from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { Dialog } from "@headlessui/react";
import { useCreateTask, useUpdateTask } from "@/hooks";
import { ButtonIcon } from "@/components/common/buttons/ButtonIcon";
import { SelectList } from "@/components/home/task/SelectList";
import { Textbox } from "@/components/common/inputs/Textbox";
import { ModalWrapper } from "@/components/common/modals/ModalWrapper";
import { capitalizeWords } from "@/utils";
import { LISTS, PRIORITY } from "@/constant/global";
import { IAddTask } from "@/interfaces";

export const AddTaskModal: FC<IAddTask> = ({ isOpen, setIsOpen, task }) => {
  const { mutate, isLoading } = useCreateTask();
  const { mutate: mutatueUpdateTask } = useUpdateTask();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      title: task?.title,
      date: task?.date,
      stage: task?.stage.toUpperCase() || LISTS[0],
      priority: task?.priority.toUpperCase() || PRIORITY[2],
    },
  });

  const stage = watch("stage");
  const priority = watch("priority");

  const handleChange = async (value: string, key: string) => {
    setValue(key, value, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  const submitHandler: SubmitHandler<FieldValues> = (data) => {
    setIsOpen(!isOpen);
    if (task) {
      mutatueUpdateTask(task._id, {
        ...data,
        stage: capitalizeWords(data.stage),
        priority: capitalizeWords(data.priority),
      });
      return;
    }

    mutate({
      ...data,
      stage: capitalizeWords(data.stage),
      priority: capitalizeWords(data.priority),
    } as any);
    reset();
  };

  return (
    <>
      <ModalWrapper open={isOpen} setOpen={setIsOpen}>
        <form onSubmit={handleSubmit(submitHandler)}>
          <Dialog.Title
            as="h2"
            className="text-base font-bold leading-6 text-gray-900 mb-4"
          >
            {task?.title ? "UPDATE TASK" : "ADD TASK"}
          </Dialog.Title>

          <div className="mt-2 flex flex-col gap-6 overflow-y-auto max-h-[500px]">
            <Textbox
              placeholder="Task Title"
              type="text"
              name="title"
              label="Task Title"
              className="w-full rounded"
              register={register("title", { required: "Title is required" })}
              error={errors.title ? errors.title.message : ""}
            />

            <div className="flex gap-4">
              <SelectList
                label="Task Stage"
                lists={LISTS}
                selected={stage}
                setSelected={(value) => handleChange(value, "stage")}
                register={register("stage", { required: "Stage is required!" })}
              />

              <div className="w-full">
                <Textbox
                  placeholder="Date"
                  type="date"
                  name="date"
                  label="Task Date"
                  className="w-full rounded"
                  register={register("date", {
                    required: "Date is required!",
                  })}
                  error={errors.date ? errors.date.message : ""}
                />
              </div>
            </div>

            <div className="flex gap-4">
              <SelectList
                label="Priority Level"
                lists={PRIORITY}
                selected={priority}
                setSelected={(value) => handleChange(value, "priority")}
                register={register("priority", {
                  required: "Priority is required!",
                })}
              />
            </div>

            <div className="flex flex-row-reverse gap-2">
              <ButtonIcon
                label="Submit"
                type="submit"
                className="bg-blue-600 px-8 text-sm font-semibold text-white hover:bg-blue-700 sm:w-auto rounded-md"
              />

              <ButtonIcon
                type="button"
                className="bg-white px-5 text-sm font-semibold text-gray-900 sm:w-auto rounded-md border border-neutral-200"
                onClick={() => setIsOpen(false)}
                label="Cancel"
              />
            </div>
          </div>
        </form>
      </ModalWrapper>
    </>
  );
};
