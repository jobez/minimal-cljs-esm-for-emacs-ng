(ns app.main)

(defn bar [message]
  (.message js/lisp message))