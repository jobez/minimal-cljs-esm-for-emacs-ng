(ns app.main)

(defn bar [message]
  (.message js/lisp message))


(defn add3 [n]
  (+ n 30))

(defn addx [n m]
      (+ n m))
