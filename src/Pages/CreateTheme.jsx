import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { supabase } from "../client";

export const CreateTheme = ({ session }) => {
  const user_id = supabase.auth.user().id;

  const create = async (postData) => {
    const user = supabase.auth.user();

    if (!user) return;
    try {
      const { data, error } = await supabase
        .from("themes")
        .insert([postData])
        .single();
      if (error) throw error;
      return data;
    } catch (e) {
      throw e;
    }
  };

  const formik = useFormik({
    initialValues: {
      folder: "",
      title: "",
      description: "",
      content: "",
      user_id: user_id,
    },
    validationSchema: Yup.object({
      folder: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Пустое поле!"),
      title: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Пустое поле!"),
      description: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Пустое поле!"),
      content: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Пустое поле!"),
    }),
    onSubmit: (values, { resetForm }) => {
      create(values);
      alert("Добавление новой темы... Готово!");
      resetForm({ values: "" });
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <br />

      <legend>Создание новой темы </legend>
      <div
        style={{
          display: "grid",
          gridColumnGap: "2.5rem",
          gridTemplateAreas:
            "'folder description''title description''content content'",
        }}
      >
        <div style={{ gridArea: "folder" }}>
          <input
            id="folder"
            name="folder"
            type="text"
            placeholder="Раздел"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.folder}
          />
          {formik.touched.folder && formik.errors.folder ? (
            <div>{formik.errors.folder}</div>
          ) : null}
        </div>
        <div style={{ gridArea: "title" }}>
          <input
            id="title"
            name="title"
            type="text"
            placeholder="Название темы"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
          />
          {formik.touched.title && formik.errors.title ? (
            <div>{formik.errors.title}</div>
          ) : null}
        </div>
        <div style={{ gridArea: "description" }}>
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Описание вкратце"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
            style={{ height: "94px" }}
          />
          {formik.touched.description && formik.errors.description ? (
            <div>{formik.errors.description}</div>
          ) : null}
        </div>
        <div style={{ gridArea: "content" }}>
          <textarea
            id="content"
            name="content"
            placeholder="Содержимое"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.content}
            style={{ minHeight: "400px" }}
          />
          {formik.touched.content && formik.errors.content ? (
            <div>{formik.errors.content}</div>
          ) : null}
        </div>
      </div>
      <button type="submit">Добавить тему</button>
    </form>
  );
};
