import React, { memo, VFC, useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  Box,
  Alert,
  AlertIcon,
  CloseButton,
  Checkbox,
  Textarea,
} from "@chakra-ui/react";

import { db } from "../../firebase";

type FormInputs = {
  typoText: string;
  correctText: string;
  detailText: string;
};

const TypoForm: VFC = memo(() => {
  const [showAlert, setShowAlert] = useState(true);
  const [showDetailArea, setShowDetailArea] = useState(false);

  const onChangeShowDetailArea = useCallback(() => {
    setShowDetailArea(!showDetailArea);
  }, [showDetailArea]);

  const {
    register,
    errors,
    handleSubmit,
    formState,
    setValue,
  } = useForm<FormInputs>({
    mode: "all",
  });

  const onSubmit = async (data: FormInputs) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    setShowAlert(true);
    setValue("typoText", "");
    setValue("correctText", "");
    setValue("detailText", "");

    try {
      await db.collection("typos").add({
        typoText: data.typoText,
        correctText: data.correctText,
        detailText: data.detailText,
      });
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
    }
  };

  return (
    <Box py={4}>
      {formState.isSubmitted && showAlert && (
        <Alert status="success" mb={4}>
          <AlertIcon />
          投稿完了しました
          <CloseButton
            onClick={() => setShowAlert(false)}
            position="absolute"
            right="8px"
            top="8px"
          />
        </Alert>
      )}

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <FormControl
          id="typoText"
          isRequired
          isInvalid={errors.typoText ? true : false}
          mb={4}
        >
          <FormLabel htmlFor="typoText">
            誤字を入力してください(30字以内)
          </FormLabel>
          <Input
            name="typoText"
            placeholder="よろしくおねがいしマングース"
            ref={register({ required: "テキスト入力は必須です" })}
          />
          <FormErrorMessage>
            {errors.typoText && errors.typoText.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl
          id="correctText"
          isRequired
          isInvalid={errors.correctText ? true : false}
        >
          <FormLabel htmlFor="correctText">
            訂正文を入力してください(30字以内)
          </FormLabel>
          <Input
            name="correctText"
            placeholder="よろしくおねがいします"
            ref={register({ required: "テキスト入力は必須です" })}
          />
          <FormErrorMessage>
            {errors.correctText && errors.correctText.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl id="showDetail" mt={4}>
          <Checkbox
            name="showDetail"
            ref={register()}
            onChange={onChangeShowDetailArea}
          >
            誤字にまつわるエピソードを入力
          </Checkbox>
        </FormControl>
        {showDetailArea && (
          <FormControl id="detailText" mt={4}>
            <FormLabel>誤字エピソード</FormLabel>
            <Textarea
              name="detailText"
              placeholder="誤字にまつわるエピソード・・・"
              ref={register()}
            />
          </FormControl>
        )}
        <Button
          type="submit"
          colorScheme="blue"
          mt={4}
          disabled={!formState.isValid}
          isLoading={formState.isSubmitting}
        >
          投稿する
        </Button>
      </form>
    </Box>
  );
});

export default TypoForm;
